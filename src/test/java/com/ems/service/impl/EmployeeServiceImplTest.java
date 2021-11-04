package com.ems.service.impl;

import com.ems.dto.UserDTO;
import com.ems.model.Employee;
import com.ems.model.constant.AccountStatus;
import com.ems.repository.EmployeeRepository;
import com.ems.repository.projections.EmployeeStatusView;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class EmployeeServiceImplTest {

    @InjectMocks
    private EmployeeServiceImpl target;

    @Mock
    private EmployeeRepository repository;

    @Mock
    private EmployeeStatusView employeeStatusView;

    @Test
    void getAccountStatusActivated() {
        Optional<EmployeeStatusView> optionalEmployeeStatusView;
        when(employeeStatusView.getAccountStatus()).thenReturn(AccountStatus.ACTIVATED);
        optionalEmployeeStatusView = Optional.of(employeeStatusView);
        when(repository.getAccountStatusByEmailAddress(anyString())).thenReturn(optionalEmployeeStatusView);
        AccountStatus status = target.getAccountStatus("some@some.com");
        assertEquals(status,AccountStatus.ACTIVATED);
        verify(repository,times(1)).getAccountStatusByEmailAddress("some@some.com");
    }

    @Test
    void findAll() {
        Employee madina = createUser();
        List<Employee> employees = new ArrayList<>();
        employees.add(madina);
        Page<Employee> employeePage = new PageImpl<>(employees);
        Pageable page = PageRequest.of(1,2);
        when(repository.findAll(page)).thenReturn(employeePage);
        Page<UserDTO> result = target.findAll(page);


        verify(repository,times(1)).findAll(page);
        assertEquals(result.getTotalElements(),employees.size());
    }

    @Test
    void findByNameOrDepartment() {
        Employee madina =createUser();
        Page<Employee> employees = new PageImpl<>(Collections.singletonList(madina));
        Pageable page = PageRequest.of(1,2);
        when(repository.findByNameOrDepartment(anyString(),eq(page))).thenReturn(employees);
        Page<UserDTO> result = target.findByNameOrDepartment("Madina",page);

        UserDTO user = result.getContent().get(0);
        LocalDate dateToString = LocalDate.now().minusYears(20);
        String birthDate = dateToString.format(DateTimeFormatter.ofPattern("dd/MMM/yyyy"));
        verify(repository,times(1)).findByNameOrDepartment("Madina",page);
        assertEquals(result.getNumberOfElements(),employees.getTotalElements());
        assertEquals(birthDate,user.getBirthDay());
    }

    private Employee createUser() {
        Employee madina = new Employee();
        madina.setNameEN("Madina Sulaiman kyzy");
        madina.setNameRU("Мадина Сулайман кызы");
        madina.setMobilePhone("+996 779 739 256");
        madina.setPhoneExt("202");
        madina.setBirthDay(LocalDate.now().minusYears(20));
        madina.setHiredDate(LocalDate.now());
        return madina;
    }
}
