package com.ems.service.impl;

import com.ems.exceptions.ApplicationServiceException;
import com.ems.exceptions.constant.ApplicationServiceExceptionType;
import com.ems.model.Role;
import com.ems.model.constant.RoleType;
import com.ems.repository.RoleRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class RoleService {

    private final RoleRepository repository;

    public RoleService(RoleRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public List<Role> findAll(){
        return repository.findAll();
    }

    @Transactional(readOnly = true)
    public Role findByRoleId(Long id){
        return repository.findById(id)
                .orElseThrow(() -> new ApplicationServiceException
                        (ApplicationServiceExceptionType.RECORD_NOT_FOUND_EXCEPTION));
    }

    @Transactional(readOnly = true)
    public Role findByRoleName(RoleType type){
        return repository.findRoleByRoleName(type.getName())
                .orElseThrow(() -> new ApplicationServiceException
                        (ApplicationServiceExceptionType.RECORD_NOT_FOUND_EXCEPTION));
    }
    public void addRole(Role role) {
        Optional<Role> role1 = repository.findRoleByRoleName(role.getRoleName());
        if (role1.isPresent()) {
            throw new ApplicationServiceException(ApplicationServiceExceptionType
                    .RECORD_ALREADY_EXIST_EXCEPTION);
        }
        repository.save(role);
    }
}
