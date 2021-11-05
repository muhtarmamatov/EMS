package com.ems.model.constant;

public enum GenderType {

    MALE("Male"),FEMALE("Female");

    private String description;

    GenderType(String description) {
        this.description = description;
    }

    public String getName(){
        return super.toString();
    }
    public String getDescription() {
        return description;
    }
}
