package com.ems.model.constant;

import lombok.Getter;

@Getter
public enum RoleType {

    ADMIN("Admin"),MANAGER("Manager"),EMPLOYEE("Employee");

    private String description;

    RoleType(String description) {
        this.description = description;
    }

    public String getName(){
        return super.toString();
    }
}
