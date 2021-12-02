package com.ems.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.List;

@Entity
@Table(name = "T_DEPARTMENT")
@Data
@EqualsAndHashCode(callSuper = false)
public class Department extends AbstractEntity{

    @Column(name = "DEPARTMENT_SHORT_NAME")
    @NotBlank(message = "{validation.department.short-name}")
    @Pattern(regexp = "^[a-zA-Z\\s]+$",message = "{validation.only.letters.allowed}")
    private String shortName;

    @Column(name = "DEPARTMENT_NAME_EN")
    @NotBlank(message = "{validation.name-not.blank}")
    @Pattern(regexp = "^[a-zA-Z\\s]+$",message = "{validation.only.letters.allowed}")
    private String departmentNameEN;

    @Column(name = "DEPARTMENT_NAME_RU")
    @NotBlank(message = "{validation.name-not.blank}")
    @Pattern(regexp = "^[а-яА-Я\\s]+$",message = "{validation.only.letters.allowed.cyrillic}")
    private String departmentNameRU;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "MANAGER_ID")
    @NotNull(message = "{validation.manager-not.null}")
    private Employee manager;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "department")
    private List<Designation> designations;
}
