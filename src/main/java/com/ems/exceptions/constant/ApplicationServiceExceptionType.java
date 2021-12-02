package com.ems.exceptions.constant;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ApplicationServiceExceptionType {
    EMAIL_ADDRESS_ACTIVATION_CODE_INCORRECT_EXCEPTION("email-address.activation-code-incorrect", HttpStatus.BAD_REQUEST),
    EMAIL_ADDRESS_ACTIVATION_EXPIRED_EXCEPTION("email-address.activation-expired", HttpStatus.BAD_REQUEST),
    EMAIL_ADDRESS_DOES_NOT_EXIST_EXCEPTION("email-address.does-not-exist", HttpStatus.BAD_REQUEST),
    EMAIL_ADDRESS_IS_ALREADY_TAKEN_EXCEPTION("email-address.already-taken", HttpStatus.BAD_REQUEST),
    EMAIL_ADDRESS_IS_ALREADY_ACTIVATED_EXCEPTION("email-address.already-activated", HttpStatus.BAD_REQUEST),
    EMAIL_SERVICE_IS_UNAVAILABLE("email-service.unavailable", HttpStatus.SERVICE_UNAVAILABLE),
    FORGOT_PASSWORD_CODE_INCORRECT_EXCEPTION("forgot-password-code-incorrect", HttpStatus.BAD_REQUEST),
    FORGOT_PASSWORD_EXPIRED_EXCEPTION("forgot-password-expired", HttpStatus.BAD_REQUEST),
    NO_SUCH_ELEMENT_EXCEPTION("no-such-element.exception",HttpStatus.NOT_FOUND),
    ELEMENT_ALREADY_EXIST_EXCEPTION("element-already-exist.exception",HttpStatus.BAD_REQUEST),
    INVALID_ENTITY_SELECT_EXCEPTION("invalid-entity-select.exception",HttpStatus.BAD_REQUEST),
    ENTITY_HAS_DEPENDENCY_EXCEPTION("entity-has-dependency.exception",HttpStatus.NOT_ACCEPTABLE);

    private final String code;
    private final HttpStatus httpStatus;


    ApplicationServiceExceptionType(String code, HttpStatus httpStatus) {
        this.code = code;
        this.httpStatus = httpStatus;
    }
}
