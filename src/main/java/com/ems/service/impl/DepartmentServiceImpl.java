package com.ems.service.impl;

import com.ems.dto.DepartmentDTO;
import com.ems.exceptions.ApplicationServiceException;
import com.ems.exceptions.constant.ApplicationServiceExceptionType;
import com.ems.model.Department;
import com.ems.model.Designation;
import com.ems.model.Employee;
import com.ems.repository.DepartmentRepository;
import com.ems.repository.EmployeeRepository;
import com.ems.service.DepartmentService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository repository;

    private final EmployeeRepository employeeRepository;


    public DepartmentServiceImpl(DepartmentRepository repository, EmployeeRepository employeeRepository) {
        this.repository = repository;
        this.employeeRepository = employeeRepository;
    }


    @Override
    public DepartmentDTO findDepartmentByName(String departmentName) {
        Optional<Department> department = repository
                .findDepartmentByDepartmentNameENOrDepartmentNameRU(departmentName,departmentName);
        return department.map(DepartmentDTO::toDTO).orElseThrow(() -> new ApplicationServiceException(
                ApplicationServiceExceptionType.NO_SUCH_ELEMENT_EXCEPTION));
    }

    @Override
    public Page<DepartmentDTO> findAll(Pageable pageable) {
        return repository.findAll(pageable).map(DepartmentDTO::toDTO);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<DepartmentDTO> findDepartmentByName(String keyword, Pageable pageable) {
        return
                repository.findDepartmentByDepartmentNameENContainingOrDepartmentNameRUContaining(keyword, keyword, pageable)
                .map(DepartmentDTO::toDTO);
    }



    @Override
    @Transactional
    public void addDepartment(Department department) {
        Optional<Department> department1 = repository.findDepartmentByDepartmentNameENOrDepartmentNameRU(
          department.getDepartmentNameEN(),department.getDepartmentNameRU());

        if (department1.isPresent()){
            throw new ApplicationServiceException(ApplicationServiceExceptionType
                    .ELEMENT_ALREADY_EXIST_EXCEPTION);
        }

        Optional<Employee> manager = employeeRepository.findById(department.getManager().getId());
        if (!manager.isPresent()){
            throw new ApplicationServiceException(ApplicationServiceExceptionType
                    .INVALID_ENTITY_SELECT_EXCEPTION);
        }
        department.setManager(manager.get());
        repository.save(department);
    }

    @Override
    @Transactional
    public void removeDepartment(Long id) {
        Optional<Department> department = repository.findById(id);
        if (!department.isPresent()){
            throw new ApplicationServiceException(ApplicationServiceExceptionType
                    .NO_SUCH_ELEMENT_EXCEPTION);
        }
        else {
            List<Designation> designations = department.get().getDesignations();
            if (designations == null || designations.isEmpty() ){
                repository.delete(department.get());
            }else {
                throw new ApplicationServiceException(
                        ApplicationServiceExceptionType
                                .ENTITY_HAS_DEPENDENCY_EXCEPTION);
            }
        }
    }

    @Override
    public List<DepartmentDTO> findAll() {
        return repository.findAll().stream()
                .map(DepartmentDTO::toDTO).collect(Collectors.toList());
    }

    @Override
    public DepartmentDTO findDepartmentById(Long id) {
        return repository.findById(id).map(DepartmentDTO::toDTO).orElseThrow(() ->
                new ApplicationServiceException(ApplicationServiceExceptionType
                        .NO_SUCH_ELEMENT_EXCEPTION));
    }

}
