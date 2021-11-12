package com.ems.service;

import com.ems.exceptions.constant.ApplicationServiceExceptionType;

import javax.servlet.http.HttpServletRequest;
import java.util.Locale;

public interface LocaleService {
    String getMessage(ApplicationServiceExceptionType code, Locale locale);
}
