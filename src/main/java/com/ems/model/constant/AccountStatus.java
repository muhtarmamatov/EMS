package com.ems.model.constant;

public enum AccountStatus {

    REGISTERED("Registered"),
    ACTIVATED("Activated"),
    PENDING("Pending"),
    DISABLED("Disabled"),
    NOT_REGISTERED("Not Registered");

    private String description;

    AccountStatus(String description) {
        this.description = description;
    }

    public String getName(){
        return super.toString();
    }
    public String getDescription() {
        return description;
    }
}
