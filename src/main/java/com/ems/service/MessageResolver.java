package com.ems.service;

import com.ems.exceptions.constant.ApplicationServiceExceptionType;
import org.springframework.validation.BindingResult;

import java.util.List;
import java.util.Locale;

public interface MessageResolver {
    String messageLocaleResolver(ApplicationServiceExceptionType type, Object[] parameter, Locale locale);
    String messageLocaleResolver(ApplicationServiceExceptionType type,Locale locale);
    List<String> messageLocaleResolver(BindingResult result,Locale locale);
}

