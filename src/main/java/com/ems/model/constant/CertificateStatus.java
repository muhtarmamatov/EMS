package com.ems.model.constant;

import lombok.Getter;

@Getter
public enum CertificateStatus {
    APPLICABLE("Applicable"),
    NOT_APPLICABLE("Not Applicable");

    private String description;

    CertificateStatus(String description) {
        this.description = description;
    }

    public String getName(){
        return super.toString();
    }
}
