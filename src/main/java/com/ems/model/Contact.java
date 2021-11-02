package com.ems.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Entity
@Table(name = "T_CONTACT")
@Data
@EqualsAndHashCode(callSuper = false)
public class Contact extends AbstractEntity{

    @Column(name = "NAME_EN")
    private String nameEN;

    @Column(name = "NAME_RU")
    private String nameRU;

    @Column(name = "EMAIL_ADDRESS")
    private String emailAddress;

    @Column(name = "MOBILE_NUMBER")
    private String mobileNumber;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "EMPLOYEE_ID")
    private Employee employee;

}
