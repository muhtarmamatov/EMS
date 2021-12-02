package com.ems.service.impl;

import com.ems.dto.DesignationDTO;
import com.ems.exceptions.ApplicationServiceException;
import com.ems.exceptions.constant.ApplicationServiceExceptionType;
import com.ems.model.Department;
import com.ems.model.Designation;
import com.ems.repository.DepartmentRepository;
import com.ems.repository.DesignationRepository;
import com.ems.service.DesignationService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class DesignationServiceImpl implements DesignationService {

    private final DesignationRepository repository;

    private final DepartmentRepository departmentRepository;

    public DesignationServiceImpl(DesignationRepository repository, DepartmentRepository departmentRepository) {
        this.repository = repository;
        this.departmentRepository = departmentRepository;
    }

    @Override
    public Page<Designation> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public Designation findByName(String positionEN,String positionRU) {
        return repository.findDesignationByPositionNameENOrPositionNameRU(positionEN,positionRU)
                .orElseThrow(() -> new ApplicationServiceException(ApplicationServiceExceptionType
                        .NO_SUCH_ELEMENT_EXCEPTION));
    }

    @Override
    public Page<Designation> findByName(String keyword, Pageable pageable) {
        return repository
                .findDesignationByPositionNameENContainingOrPositionNameRUContaining(
                        keyword,keyword,pageable);
    }

    @Override
    @Transactional
    public void addDesignation(Designation designation) {
        Optional<Designation> designation1 = repository
                .findDesignationByPositionNameENOrPositionNameRU(designation.getPositionNameEN()
                ,designation.getPositionNameRU());

        if (designation1.isPresent()){
            throw new ApplicationServiceException(ApplicationServiceExceptionType
                    .ELEMENT_ALREADY_EXIST_EXCEPTION);
        }

        Optional<Department> department = departmentRepository.findById(designation.getDepartment().getId());

        if (!department.isPresent()){
            throw new ApplicationServiceException(ApplicationServiceExceptionType
                    .INVALID_ENTITY_SELECT_EXCEPTION);
        }
        designation.setDepartment(department.get());
        repository.save(designation);
    }

    @Override
    @Transactional
    public void removeDesignation(Long id) {
        Optional<Designation> designation = repository.findById(id);
        if (!designation.isPresent()) {
            throw new ApplicationServiceException(ApplicationServiceExceptionType
                    .NO_SUCH_ELEMENT_EXCEPTION);
        }
        repository.delete(designation.get());
    }

    @Override
    public List<Designation> findAll() {
        return repository.findAll();
    }

    @Override
    public DesignationDTO findDesignationById(Long id) {
        return repository.findById(id).map(DesignationDTO::toDTO)
                .orElseThrow(() -> new ApplicationServiceException(ApplicationServiceExceptionType
                        .NO_SUCH_ELEMENT_EXCEPTION));
    }
}
