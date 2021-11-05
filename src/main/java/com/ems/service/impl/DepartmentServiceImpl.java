package com.ems.service.impl;

import com.ems.exceptions.ApplicationServiceException;
import com.ems.exceptions.constant.ApplicationServiceExceptionType;
import com.ems.model.Department;
import com.ems.model.Designation;
import com.ems.repository.DepartmentRepository;
import com.ems.service.DepartmentService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository repository;

    public DepartmentServiceImpl(DepartmentRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional(readOnly = true)
    public Department findDepartmentByName(String departmentName) {
        return repository.findDepartmentByDepartmentNameENOrDepartmentNameRU
                (departmentName,departmentName).orElseThrow(() ->
                new ApplicationServiceException(ApplicationServiceExceptionType
                        .RECORD_NOT_FOUND_EXCEPTION));
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Department> findDepartmentByName(String keyword, Pageable pageable) {
        return repository
                .findDepartmentByDepartmentNameENContainingOrDepartmentNameRUContaining(keyword,keyword,pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Department> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public void addDepartment(Department department) {
        Optional<Department> department1 = repository.findDepartmentByDepartmentNameENOrDepartmentNameRU(
          department.getDepartmentNameEN(),department.getDepartmentNameRU()
        );

        if (department1.isPresent()){
            throw new ApplicationServiceException(ApplicationServiceExceptionType
                    .RECORD_ALREADY_EXIST_EXCEPTION);
        }
        repository.save(department);
    }

    @Override
    public void removeDepartment(Long id) {
        Optional<Department> department = repository.findById(id);
        if (!department.isPresent()){
            throw new ApplicationServiceException(ApplicationServiceExceptionType
                    .RECORD_NOT_FOUND_EXCEPTION);
        }
        else {
            List<Designation> designations = department.get().getDesignations();
            if (designations == null || designations.isEmpty() ){
                repository.delete(department.get());
            }else {
                throw new ApplicationServiceException(
                        ApplicationServiceExceptionType.RECORD_HAS_DEPENDENCY_EXCEPTION);
            }
        }
    }
}
