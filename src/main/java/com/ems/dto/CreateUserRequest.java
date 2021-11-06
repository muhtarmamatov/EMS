package com.ems.dto;

import com.ems.model.Contact;
import com.ems.model.Department;
import com.ems.model.Designation;
import com.ems.model.Role;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
public class CreateUserRequest {

    @NotBlank(message = "{validation.email-address-not.blank}")
    @Email(message = "{validation.email-address.format}")
    private String emailAddress;

    @NotBlank(message = "{validation.name-not.blank}")
    private String nameEN;

    @NotBlank(message = "{validation.name-not.blank}")
    private String nameRU;

    @NotBlank(message = "{validation.mobile-number-not.blank}")
    private String mobileNumbers;

    private String phoneExt;

    @NotNull(message = "{validation.gender-not.null}")
    private String genderType;

    @NotNull(message = "{validation.date-not.null}")
    private String birthDay;

    @NotNull(message = "{validation.date-not.null}")
    private String hiredDate;

    @NotEmpty(message = "{validation.roles-not.empty}")
    private List<Role> roles;

    @NotEmpty(message = "{validation.department-not.empty}")
    private Department department;

    @NotEmpty(message = "{validation.designations-not.empty}")
    private Designation designation;

    @NotNull(message = "{validation.manager-not.null}")
    private Long managerId;

    @NotEmpty(message = "{validation.contact-not.empty}")
    private List<Contact> contacts;
}
