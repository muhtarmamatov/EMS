package com.ems.model;

import com.ems.model.constant.AccountStatus;
import com.ems.model.constant.GenderType;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "T_EMPLOYEE")
@Data
@EqualsAndHashCode(callSuper = false)
public class Employee extends AbstractEntity{

    @Column(name = "FULL_NAME_EN")
    private String nameEN;

    @Column(name = "FULL_NAME_RU")
    private String nameRU;

    @Column(name = "EMAIL_ADDRESS")
    private String emailAddress;

    @Column(name = "GENDER_TYPE")
    @Enumerated(EnumType.STRING)
    private GenderType genderType;

    @Column(name = "BIRTH_DAY")
    private LocalDate birthDay;

    @Column(name = "HIRED_DATE")
    private LocalDate hiredDate;

    @Column(name = "PHONE_EXTENSION")
    private String phoneExt;

    @Column(name = "MOBILE_NUMBER")
    private String mobilePhone;

    @Column(name = "ACTIVATION_CODE")
    private String activationCode;

    @Column(name = "ACCOUNT_STATUS")
    @Enumerated(EnumType.STRING)
    private AccountStatus accountStatus;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "DESIGNATION_ID")
    private Designation designation;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "DEPARTMENT_ID")
    private Department department;

    @ManyToMany(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(name = "USER_ROLE",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<Role> roles;

    @OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL, mappedBy = "employee")
    private List<Contact> contacts;

    @OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL,mappedBy = "employee")
    private List<Vacation> vacations;

    @OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "VACATION_DAYS_ID")
    private VacationDays vacationDays;


    @OneToMany(mappedBy = "employee",cascade = CascadeType.ALL)
    private List<EmployeeCertifications> employeeCertifications;

    @ManyToOne
    @JoinColumn(name = "MANAGER_ID")
    private Employee manager;

    @OneToMany(mappedBy = "manager")
    private Set<Employee> subordinates = new HashSet<>();
}
