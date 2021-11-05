package com.ems.service;

import com.ems.model.Designation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface DesignationService {

    Page<Designation> findAll(Pageable pageable);

    Designation findByName(String positionEN,String positionRU);

    Page<Designation> findByName(String keyword,Pageable pageable);

    void addDesignation(Designation designation);

    void removeDesignation(Long id);
}
