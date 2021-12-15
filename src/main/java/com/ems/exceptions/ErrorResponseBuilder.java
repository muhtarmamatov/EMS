package com.ems.exceptions;

import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Locale;

@Component
public class ErrorResponseBuilder {

    private final MessageSource messageSource;

    public ErrorResponseBuilder(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    public String build(String errorFiled, Object[] parameter, Locale locale){
        return messageSource.getMessage(errorFiled,parameter,locale);
    }


}
