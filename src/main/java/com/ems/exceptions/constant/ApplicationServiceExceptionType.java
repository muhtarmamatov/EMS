package com.ems.exceptions.constant;

import lombok.Getter;

@Getter
public enum ApplicationServiceExceptionType {
    RECORD_ALREADY_EXIST_EXCEPTION("record.already-exist"),
    RECORD_HAS_DEPENDENCY_EXCEPTION("record.has-dependency"),
    EMAIL_ADDRESS_ALREADY_TAKEN_EXCEPTION("email-address.already-taken"),
    RECORD_NOT_FOUND_EXCEPTION("record-not.found");

    private final String code;

    ApplicationServiceExceptionType(String code) {
        this.code = code;
    }
}
