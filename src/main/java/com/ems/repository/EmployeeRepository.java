package com.ems.repository;

import com.ems.model.Employee;
import com.ems.repository.projections.EmployeeStatusView;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Optional<EmployeeStatusView> getAccountStatusByEmailAddress(String emailAddress);

    Page<Employee> findAll(Pageable pageable);

    Optional<Employee> getEmployeeByEmailAddress(String emailAddress);

    @Query("SELECT e FROM Employee e JOIN e.department d WHERE e.nameRU LIKE CONCAT('%',?1,'%') " +
            "OR e.nameEN LIKE CONCAT('%',?1,'%') OR d.departmentNameEN LIKE CONCAT('%',?1,'%') " +
            "OR d.departmentNameRU LIKE CONCAT('%',?1,'%')")
    Page<Employee> findByNameOrDepartment(String keyword, Pageable pageable);

    @Query("SELECT e FROM Employee e LEFT JOIN e.roles r WHERE r.roleName=?1")
    List<Employee> findEmployeeByRoleName(String roleName);
}
