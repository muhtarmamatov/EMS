package com.ems.repository;

import com.ems.model.Designation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DesignationRepository extends JpaRepository<Designation,Long> {

    Page<Designation> findAll(Pageable pageable);

    Optional<Designation> findDesignationByPositionNameENOrPositionNameRU(String positionEN, String positionRU);

    Page<Designation> findDesignationByPositionNameENContainingOrPositionNameRUContaining(String pos1,String pos2,Pageable pageable);



}
