package com.ems.service.util;

import com.ems.model.template.Activation;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.UUID;

@Component
public class ActivationGenerator {

    @Value("${activationCode.validHours}")
    private int validHours;
    public Activation generate(){
        Activation activation = new Activation();
        activation.setActivationCode(UUID.randomUUID().toString());
        activation.setCodeExpiration(LocalDateTime.now().plusHours(validHours));
        return activation;
    }
}
