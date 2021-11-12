package com.ems.service.registration;

import com.ems.dto.CreateUserRequest;
import com.ems.exceptions.ApplicationServiceException;
import com.ems.exceptions.constant.ApplicationServiceExceptionType;
import com.ems.model.Department;
import com.ems.model.Designation;
import com.ems.model.Employee;
import com.ems.model.constant.AccountStatus;
import com.ems.model.constant.GenderType;
import com.ems.model.template.Activation;
import com.ems.service.EmployeeService;
import com.ems.service.util.ActivationGenerator;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.Collections;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class EmployeeRegistrationServiceTest {

    @InjectMocks
    private EmployeeRegistrationService target;

    @Mock
    private EmployeeService service;

    @Mock
    private ActivationGenerator generator;

    @Captor
    private ArgumentCaptor<Employee> employeeArgumentCaptor;

    @Test
    void registerAccountAlreadyExist(){
        CreateUserRequest request = createUserRequest();
        when(service.getAccountStatus(anyString())).thenReturn(AccountStatus.REGISTERED);

        ApplicationServiceException e = assertThrows(ApplicationServiceException.class,
                () -> target.register(request));

        verify(service,times(1)).getAccountStatus("some@some.com");
        assertEquals(ApplicationServiceExceptionType.EMAIL_ADDRESS_ALREADY_TAKEN_EXCEPTION,e.getType());
    }

    @Test
    void registerAccountSuccess(){
        CreateUserRequest request = createUserRequest();
        Employee manager = createManager();

        Activation activation = new Activation();
        activation.setActivationCode("SomeUUID");
        activation.setCodeExpiration(LocalDateTime.of(2021, Month.NOVEMBER,7,11,0));

        when(service.getAccountStatus(anyString())).thenReturn(AccountStatus.NOT_REGISTERED);
        when(service.findEmployeeById(anyLong())).thenReturn(manager);
        when(generator.generate()).thenReturn(activation);

        target.register(request);

        verify(service,times(1)).getAccountStatus("some@some.com");
        verify(service,times(1)).findEmployeeById(1L);
        verify(service,times(1)).addEmployee(employeeArgumentCaptor.capture());

        Employee employee = employeeArgumentCaptor.getValue();

        assertNotNull(employee);
        assertEquals(request.getEmailAddress(),employee.getEmailAddress());
        assertEquals(request.getNameEN(),employee.getNameEN());
        assertEquals(request.getNameRU(),employee.getNameRU());
        assertEquals(request.getDepartment(),employee.getDepartment());
        assertEquals(request.getDesignation(),employee.getDesignation());
        assertEquals(request.getContacts(),employee.getContacts());
        assertEquals(GenderType.MALE,employee.getGenderType());
        assertEquals(LocalDate.of(1993, Month.JANUARY,1),employee.getBirthDay());
        assertEquals(LocalDate.of(2010,Month.JANUARY,10),employee.getHiredDate());
        assertEquals(335.298f,employee.getVacationDays().getVacationDays());
        assertEquals(21,employee.getVacationDays().getExtraDays());
        assertEquals(356.298f,employee.getVacationDays().getTotalDays());
        assertEquals("SomeUUID",employee.getActivationCode());
    }

    private CreateUserRequest createUserRequest(){
        CreateUserRequest request = new CreateUserRequest();
        request.setEmailAddress("some@some.com");
        request.setNameEN("Some User");
        request.setNameRU("Какой то пользователь");
        request.setHiredDate("10/Jan/2010");
        request.setBirthDay("01/Jan/1993");
        request.setGenderType("MALE");
        request.setMobileNumbers("+996 (779) 739 256");
        request.setPhoneExt("202");
        request.setManagerId(1L);
        request.setDepartment(createDepartment());
        request.setDesignation(createDesignation());
        request.setContacts(Collections.emptyList());
        return request;
    }

    private Employee createManager() {
        Employee manager = new Employee();
        manager.setId(1L);
        manager.setNameRU("Какой то Руководитель");
        manager.setNameEN("Some Manager");
        return manager;
    }

    private Designation createDesignation() {
        Designation designation = new Designation();
        designation.setPositionNameEN("Pos01");
        designation.setPositionNameRU("Поз01");
        return designation;
    }

    private Department createDepartment() {
        Department department = new Department();
        department.setId(5L);
        department.setDepartmentNameRU("Летный Отдел");
        department.setDepartmentNameEN("Flight Operations");
        return department;
    }
}
