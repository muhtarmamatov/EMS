package com.ems.service.registration;

import com.ems.dto.CreateUserRequest;
import com.ems.dto.mapper.UserMapper;
import com.ems.exceptions.ApplicationServiceException;
import com.ems.exceptions.constant.ApplicationServiceExceptionType;
import com.ems.model.Employee;
import com.ems.model.VacationDays;
import com.ems.model.constant.AccountStatus;
import com.ems.model.template.Activation;
import com.ems.service.EmployeeService;
import com.ems.service.util.ActivationGenerator;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Collections;

@Service
public class EmployeeRegistrationService {

    private final EmployeeService employeeService;

    private final ActivationGenerator generator;

    public EmployeeRegistrationService(EmployeeService employeeService, ActivationGenerator generator) {
        this.employeeService = employeeService;
        this.generator = generator;
    }

    @Transactional
    public void register(CreateUserRequest request) {
        AccountStatus status = employeeService.getAccountStatus(request.getEmailAddress());
        if (!status.equals(AccountStatus.NOT_REGISTERED)) {
            throw new ApplicationServiceException(ApplicationServiceExceptionType
                    .EMAIL_ADDRESS_ALREADY_TAKEN_EXCEPTION);
        }

        Activation activation = saveAccount(request);

    }

    private Activation saveAccount(CreateUserRequest request) {
        Activation activation = generator.generate();
        UserMapper mapper = new UserMapper();
        Employee employee = mapper.toEntity(request);
        employee.setActivationCode(activation.getActivationCode());
        employee.setManager(setManager(request.getManagerId()));
        employee.setEmployeeCertifications(Collections.emptyList());
        employee.setVacationDays(setVacationDays(employee));
        employee.setVacations(Collections.emptyList());
        employeeService.addEmployee(employee);
        return activation;
    }

    private VacationDays setVacationDays(Employee employee) {
        VacationDays vd = new VacationDays();
        long hiredDate = ChronoUnit.MONTHS.between(employee.getHiredDate(),LocalDate.now());
        float vacationDay = hiredDate * 2.378f;
        float extraDays = setExtraDays(employee, hiredDate);
        float totalDays = vacationDay + extraDays;
        int earnedDays = (int) totalDays;
        vd.setVacationDays(vacationDay);
        vd.setSpentDays(0);
        vd.setExtraDays(extraDays);
        vd.setTotalDays(totalDays);
        vd.setEarnedDays(earnedDays);
        vd.setWorkExperience((int) hiredDate);
        return vd;
    }

    private float setExtraDays(Employee employee, long hiredDate) {
        float extraDays = 0.0f;
        String departmentName = employee.getDepartment().getDepartmentNameEN();
        if (departmentName.equals("Flight Operations") ||
                departmentName.equals("Cabin Operations")) {
            if (departmentName.equals("Cabin Operations") && hiredDate > 84) {
                return extraDays = 14;
            } else if (departmentName.equals("Flight Operations") && hiredDate < 180 && hiredDate > 120) {
                return extraDays = 21;
            } else if (departmentName.equals("Flight Operations") && hiredDate > 180) {
                return extraDays = 28;
            }
        }
        return extraDays;
    }

    private Employee setManager(Long managerId) {
        Employee manager = employeeService.findEmployeeById(managerId);
        if (manager == null) {
            return manager = employeeService.findEmployeeById(1L);
        }
        return manager;
    }
}
