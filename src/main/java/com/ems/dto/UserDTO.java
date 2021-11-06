package com.ems.dto;

import com.ems.model.Contact;
import com.ems.model.Department;
import com.ems.model.Designation;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class UserDTO {

    private Long id;

    private String emailAddress;

    private String nameRU;

    private String nameEN;

    private Department department;

    private Designation designation;

    private String mobileNumber;

    private String phoneExt;

    private String managerNameEN;

    private String managerNameRU;

    private String gender;

    private String birthDay;

    private String hiredDate;

    private List<Contact> contacts;

}
