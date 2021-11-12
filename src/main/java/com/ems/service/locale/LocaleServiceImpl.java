package com.ems.service.locale;

import com.ems.exceptions.constant.ApplicationServiceExceptionType;
import com.ems.service.LocaleService;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;

import java.util.Locale;

@Component
public class LocaleServiceImpl implements LocaleService {

    private final MessageSource messageSource;

    public LocaleServiceImpl(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    @Override
    public String getMessage(ApplicationServiceExceptionType code, Locale locale) {
        if (code != null){
            return messageSource.getMessage(code.getCode(),null,locale);
        }
        return "";
    }
}
