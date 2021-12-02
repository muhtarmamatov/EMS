package com.ems.dto;

import com.ems.model.Department;
import lombok.Builder;
import lombok.Data;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
public class DepartmentDTO {
    private Long id;
    private String departmentNameRU;
    private String shortName;
    private String departmentNameEN;
    private String managerNameEn;
    private String managerNameRu;
    private Long managerId;
    private Instant creationDate;

    public static DepartmentDTO toDTO(Department department){
        return DepartmentDTO.builder()
                .id(department.getId())
                .shortName(department.getShortName())
                .departmentNameEN(department.getDepartmentNameEN())
                .departmentNameRU(department.getDepartmentNameRU())
                .managerId(department.getManager().getId())
                .managerNameEn(department.getManager().getNameEN())
                .managerNameRu(department.getManager().getNameRU())
                .creationDate(department.getCreationTime())
                .build();
    }

    public Department toEntity(DepartmentDTO dto){
        Department department = new Department();
        department.setDepartmentNameRU(dto.getDepartmentNameRU());
        department.setDepartmentNameEN(dto.getDepartmentNameEN());
        department.setShortName(dto.getShortName());
        return department;
    }

    public  List<DepartmentDTO> toDTO(List<Department> departments){
        return departments.stream().map(DepartmentDTO::toDTO).collect(Collectors.toList());
    }
}
