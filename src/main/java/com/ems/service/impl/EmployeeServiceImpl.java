package com.ems.service.impl;

import com.ems.dto.UserDTO;
import com.ems.dto.mapper.UserMapper;
import com.ems.exceptions.ApplicationServiceException;
import com.ems.exceptions.constant.ApplicationServiceExceptionType;
import com.ems.model.Employee;
import com.ems.model.constant.AccountStatus;
import com.ems.repository.EmployeeRepository;
import com.ems.repository.projections.EmployeeStatusView;
import com.ems.service.EmployeeService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeServiceImpl(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public AccountStatus getAccountStatus(String emailAddress) {
        Optional<EmployeeStatusView> status = repository.getAccountStatusByEmailAddress(emailAddress);
        if (status.isPresent()){
            return status.get().getAccountStatus();
        }
        return AccountStatus.NOT_REGISTERED;
    }

    @Override
    public Page<UserDTO> findAll(Pageable pageable) {
        return repository.findAll(pageable).map(this::toDTO);
    }

    @Override
    public Page<UserDTO> findByNameOrDepartment(String keyword, Pageable pageable) {
        return repository.findByNameOrDepartment(keyword,pageable).map(this::toDTO);
    }

    @Override
    @Transactional
    public void addEmployee(Employee employee) {
        repository.save(employee);
    }

    @Override
    public Employee findEmployeeById(Long id) {
        return repository.findById(id).orElseThrow(() ->
                new ApplicationServiceException(ApplicationServiceExceptionType
                        .RECORD_NOT_FOUND_EXCEPTION));
    }


    private UserDTO toDTO(Employee employee) {
        UserMapper mapper = new UserMapper();
        return mapper.toDTO(employee);
    }
}
