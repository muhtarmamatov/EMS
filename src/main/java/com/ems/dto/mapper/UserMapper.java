package com.ems.dto.mapper;

import com.ems.dto.CreateUserRequest;
import com.ems.dto.UserDTO;
import com.ems.model.Employee;
import com.ems.model.constant.AccountStatus;
import com.ems.model.constant.GenderType;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Optional;

@Slf4j
public class UserMapper {

    private final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("dd/MMM/yyyy");


    public UserDTO toDTO(Employee employee){
        return UserDTO.builder()
                .id(employee.getId())
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

    public Employee toEntity(CreateUserRequest request){
        Employee employee = new Employee();
        employee.setEmailAddress(request.getEmailAddress());
        employee.setNameRU(request.getNameRU());
        employee.setNameEN(request.getNameEN());
        employee.setMobilePhone(request.getMobileNumbers());
        employee.setPhoneExt(request.getPhoneExt());
        employee.setAccountStatus(AccountStatus.REGISTERED);
        employee.setContacts(request.getContacts());
        employee.setDepartment(request.getDepartment());
        employee.setDesignation(request.getDesignation());
        employee.setBirthDay(setDate(request.getBirthDay()));
        employee.setHiredDate(setDate(request.getHiredDate()));
        employee.setGenderType(GenderType.valueOf(request.getGenderType()));
        return employee;
    }

    private LocalDate setDate(String date) {
        if (date.isEmpty()){
            return LocalDate.now();
        }
        LocalDate result = LocalDate.now();
        try {
            result = LocalDate.parse(date,FORMATTER);
        }catch (DateTimeParseException e){
            e.getParsedString();
        }
        return result;
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
