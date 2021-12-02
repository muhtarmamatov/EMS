package com.ems.service;

import com.ems.dto.DepartmentDTO;
import com.ems.model.Department;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface DepartmentService {
    DepartmentDTO findDepartmentByName(String departmentName);
    Page<DepartmentDTO> findAll(Pageable pageable);
    Page<DepartmentDTO> findDepartmentByName(String keyword, Pageable pageable);
    void addDepartment(Department department);
    void removeDepartment(Long id);
    List<DepartmentDTO> findAll();
    DepartmentDTO findDepartmentById(Long id);
}
