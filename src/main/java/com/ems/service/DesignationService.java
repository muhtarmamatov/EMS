package com.ems.service;

import com.ems.dto.DesignationDTO;
import com.ems.model.Designation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface DesignationService {

    Page<DesignationDTO> findAll(Pageable pageable);

    DesignationDTO findByName(String positionEN,String positionRU);

    Page<DesignationDTO> findByName(String keyword,Pageable pageable);

    void addDesignation(Designation designation);

    void removeDesignation(Long id);

    List<Designation> findAll();

    DesignationDTO findDesignationById(Long id);

    void updateDesignation(Long id, Designation position);
}
