package com.ems.service.impl;

import com.ems.exceptions.constant.ApplicationServiceExceptionType;
import com.ems.service.MessageResolver;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;

import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

@Component
public class MessageResolverImpl implements MessageResolver {

    private final MessageSource messageSource;

    public MessageResolverImpl(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    @Override
    public String messageLocaleResolver(ApplicationServiceExceptionType type, Object[] parameter, Locale locale) {
        return messageSource.getMessage(type.getCode(),parameter,locale);
    }

    @Override
    public String messageLocaleResolver(ApplicationServiceExceptionType type, Locale locale) {
        return messageSource.getMessage(type.getCode(),null,locale);
    }

    @Override
    public List<String> messageLocaleResolver(BindingResult result, Locale locale) {
        return   result.getAllErrors()
                .stream()
                .map(objectError -> messageSource.getMessage(objectError, locale))
                .collect(Collectors.toList());
    }
}
