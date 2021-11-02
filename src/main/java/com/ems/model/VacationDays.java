package com.ems.model;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Entity
@Table(name = "T_VACATION_DAYS")
@Data
@EqualsAndHashCode(callSuper = false)
public class VacationDays extends AbstractEntity{

    @Column(name = "EARNED_DAYS")
    private Integer earnedDays;

    @Column(name = "TOTAL_DAYS")
    private Float totalDays;

    @Column(name = "VACATION_DAYS")
    private Float vacationDays;

    @Column(name = "EXTRA_DAYS")
    private Float extraDays;

    @Column(name = "SPENT_DAYS")
    private Integer spentDays;

    @Column(name = "WORK_EXPERIENCE")
    private Integer workExperience;

    @OneToOne(fetch = FetchType.EAGER,mappedBy = "vacationDays")
    private Employee employee;
}
