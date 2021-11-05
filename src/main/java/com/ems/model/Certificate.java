package com.ems.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "T_EMPLOYEE")
@Data
@EqualsAndHashCode(callSuper = false)
public class Certificate extends AbstractEntity {

    @Column(name = "CERTIFICATE_NAME")
    private String certificateName;

    @Column(name = "VALID_DATE")
    private LocalDate validDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "EMPLOYEE_ID")
    private Employee employee;
}
