package com.ems.repository;

import com.ems.model.Department;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface DepartmentRepository extends JpaRepository<Department,Long> {
    Page<Department> findAll(Pageable pageable);
    Optional<Department> findDepartmentByDepartmentNameENOrDepartmentNameRU(
            String departmentNameEn,String departmentNameRu);
    Page<Department> findDepartmentByDepartmentNameENContainingOrDepartmentNameRUContaining(String name1,
                                                                                            String name2,
                                                                                            Pageable pageable);

}
