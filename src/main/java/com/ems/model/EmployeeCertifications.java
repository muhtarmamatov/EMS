package com.ems.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "EMPLOYEE_CERTIFICATE_TRACKING")
@Data
@EqualsAndHashCode(callSuper = false)
public class EmployeeCertifications extends AbstractEntity {

    @Column(name = "CERTIFICATE_ASSIGN_DATE")
    private LocalDate assignDate;

    @Column(name = "CERTIFICATE_EXPIRATION_DATE")
    private LocalDate expireDate;

    @ManyToOne
    @JoinColumn(name = "EMPLOYEE_FK")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "CERTIFICATE_FK")
    private Certificate certificate;
}
