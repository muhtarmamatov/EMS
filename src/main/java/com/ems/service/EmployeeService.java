package com.ems.service;


import com.ems.dto.UserDTO;
import com.ems.model.Employee;
import com.ems.model.constant.AccountStatus;
import com.ems.model.constant.RoleType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface EmployeeService {

    AccountStatus getAccountStatus(String emailAddress);

    Page<UserDTO> findAll(Pageable pageable);

    Page<UserDTO> findByNameOrDepartment(String keyword, Pageable pageable);

    void addEmployee(Employee employee);

    Employee findEmployeeById(Long id);

    List<UserDTO> findAccountByRoleName(RoleType roleType);
}
