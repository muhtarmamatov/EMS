package com.ems.dto.mapper;

import com.ems.dto.UserDTO;
import com.ems.model.Employee;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

public class UserMapper {

    private final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("dd/MMM/yyyy");


    public UserDTO toDTO(Employee employee){
        return UserDTO.builder()
                .nameRU(setValues(employee.getNameRU()))
                .nameEN(setValues(employee.getNameEN()))
                .emailAddress(setValues(employee.getEmailAddress()))
                .gender(setValues(employee.getGenderType()))
                .mobileNumber(setValues(employee.getMobilePhone()))
                .phoneExt( setValues(employee.getPhoneExt()))
                .contacts(employee.getContacts())
                .department(employee.getDepartment())
                .designation(employee.getDesignation())
                .birthDay(dateToString(employee.getBirthDay()))
                .hiredDate(dateToString(employee.getHiredDate()))
                .managerNameEN(setManager(employee.getManager(),"EN"))
                .managerNameRU(setManager(employee.getManager(),"RU"))
                .build();

    }

    private String setManager(Employee employee,final String lang){
        if (employee == null){
            return "";
        }
        return lang.equals("EN") ? employee.getNameEN() : employee.getNameRU();
    }
    private String setValues(Object type) {
        return Optional.ofNullable(type).map(Object::toString).orElse("");
    }

    private String  dateToString(LocalDate date) {
        if ( date == null){
            return "";
        }
        return date.format(FORMATTER);
    }
}
