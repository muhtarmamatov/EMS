package com.ems.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "T_DESIGNATION")
@Data
@EqualsAndHashCode(callSuper = false)
public class Designation extends AbstractEntity{

    @Column(name = "POSITION_NAME_EN")
    @NotBlank(message = "{validation.name-not.blank}")
    @Pattern(regexp = "^[a-zA-Z\\s]+$",message = "{validation.only.letters.allowed}")
    private String positionNameEN;

    @Column(name = "POSITION_NAME_RU")
    @NotBlank(message = "{validation.name-not.blank}")
    @Pattern(regexp = "^[а-яА-Я\\s]+$",message = "{validation.only.letters.allowed.cyrillic}")
    private String positionNameRU;

    @Column(name = "POSITION_DESCRIPTION")
    private String positionDescription;

    @ManyToOne
    @JoinColumn(name = "DEPARTMENT_ID")
    @NotNull(message = "{validation.department-not.empty}")
    @Valid
    private Department department;
}
