package com.ems.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "T_DEPARTMENT")
@Data
@EqualsAndHashCode(callSuper = false)
public class Department extends AbstractEntity{

    @Column(name = "DEPARTMENT_SHORT_NAME")
    private String shortName;

    @Column(name = "DEPARTMENT_NAME")
    private String departmentName;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "MANAGER_ID")
    private Employee manager;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "department")
    private List<Designation> designations;
}
