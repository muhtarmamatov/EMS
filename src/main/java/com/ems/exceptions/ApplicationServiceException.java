package com.ems.exceptions;

import com.ems.exceptions.constant.ApplicationServiceExceptionType;
import lombok.Getter;

@Getter
public class ApplicationServiceException extends RuntimeException {

    private final ApplicationServiceExceptionType type;

    public ApplicationServiceException(ApplicationServiceExceptionType type) {
        this.type = type;
    }
}
