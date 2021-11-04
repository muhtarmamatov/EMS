package com.ems.service;

import com.ems.model.Department;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface DepartmentService {
    Department findDepartmentByName(String departmentNameEn,String departmentNameRu);
    Page<Department> findAll(Pageable pageable);
    Page<Department> findDepartmentByName(String keyword, Pageable pageable);
    void addDepartment(Department department);
    void removeDepartment(Long id);
}
