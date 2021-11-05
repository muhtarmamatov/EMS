package com.ems.model;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "T_ROLE")
@Data
@EqualsAndHashCode(callSuper = false)
public class Role extends AbstractEntity{

    @Column(name = "ROLE_NAME")
    private String roleName;

    @Column(name = "ROLE_DESCRIPTION")
    private String roleDescription;

    @ManyToMany(mappedBy = "roles")
    private List<Employee> employees;
}
