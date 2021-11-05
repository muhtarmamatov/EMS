package com.ems.model.constant;

public enum  VacationStatus {
    REJECTED_BY_HR("REJECTED BY HR"),
    REJECTED_BY_MANAGER("REJECTED BY MANAGER"),
    REJECTED_BY_CEO("REJECTED BY CEO"),
    MANAGER_APPROVING("MANAGER APPROVING"),
    HR_APPROVING("HR APPROVING"),
    CEO_APPROVING("CEO APPROVING"),
    APPROVED("APPROVED");

    private String description;

    VacationStatus(String description) {
        this.description = description;
    }

    public String getName(){
        return super.toString();
    }
    public String getDescription() {
        return description;
    }
}
