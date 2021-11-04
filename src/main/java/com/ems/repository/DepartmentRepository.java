package com.ems.repository;

import com.ems.model.Department;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface DepartmentRepository extends JpaRepository<Department,Long> {

    Page<Department> findAll(Pageable pageable);

    Optional<Department> findDepartmentByDepartmentNameENOrDepartmentNameRU(
            String departmentNameEn,String departmentNameRu);

    @Query("SELECT  d FROM Department d WHERE d.departmentNameEN LIKE CONCAT('%',?1,'%') OR d.departmentNameRU LIKE CONCAT('%',?1,'%')")
    Page<Department> findDepartmentByName(String keyword,Pageable pageable);

}
