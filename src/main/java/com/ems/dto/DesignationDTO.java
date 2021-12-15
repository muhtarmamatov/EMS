package com.ems.dto;

import com.ems.model.Department;
import com.ems.model.Designation;
import lombok.Builder;
import lombok.Data;

import java.time.Instant;

@Data
@Builder
public class DesignationDTO {

    private Long id;

    private String positionNameEN;

    private String positionNameRU;

    private String positionDescription;

    private DepartmentDTO department;

    private Instant creationTime;

    public static DesignationDTO toDTO(Designation d){
        return DesignationDTO.builder()
                .id(d.getId())
                .positionNameEN(d.getPositionNameEN())
                .positionNameRU(d.getPositionNameRU())
                .positionDescription(d.getPositionDescription())
                .creationTime(d.getCreationTime())
                .department(setDepartmentValues(d.getDepartment()))
                .build();
    }

    private static DepartmentDTO setDepartmentValues(Department department) {
        return DepartmentDTO.toDTO(department);
    }

}
