package com.ems.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Entity
@Table(name = "T_DESIGNATION")
@Data
@EqualsAndHashCode(callSuper = false)
public class Designation extends AbstractEntity{

    @Column(name = "POSITION_NAME_EN")
    private String positionNameEN;

    @Column(name = "POSITION_NAME_RU")
    private String positionNameRU;

    @Column(name = "POSITION_DESCRIPTION")
    private String positionDescription;

    @OneToOne(fetch = FetchType.EAGER,mappedBy = "designation")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "DEPARTMENT_ID")
    private Department department;
}
