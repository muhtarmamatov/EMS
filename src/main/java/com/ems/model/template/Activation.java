package com.ems.model.template;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Activation {

    private String activationCode;

    private LocalDateTime codeExpiration;

}
