package com.ems.model;


import com.ems.model.constant.VacationStatus;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "T_VACATION")
@Data
@EqualsAndHashCode(callSuper = false)
public class Vacation extends AbstractEntity{

    @Column(name = "START_DATE")
    private LocalDate startDate;

    @Column(name = "END_DATE")
    private LocalDate endDate;

    @Column(name = "DAYS")
    private Integer days;

    @Column(name = "COMMENTS")
    private String comments;

    @Column(name = "SEND_EMAIL")
    private boolean sendEmail;

    @Column(name = "VACATION_STATUS")
    @Enumerated(EnumType.STRING)
    private VacationStatus vacationStatus;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "EMPLOYEE_ID")
    private Employee employee;
}
