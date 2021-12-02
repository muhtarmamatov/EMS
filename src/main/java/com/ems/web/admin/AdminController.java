package com.ems.web.admin;

import com.ems.dto.CreateUserRequest;
import com.ems.model.constant.RoleType;
import com.ems.service.DepartmentService;
import com.ems.service.DesignationService;
import com.ems.service.EmployeeService;
import com.ems.service.impl.RoleService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminController {


    private final EmployeeService employeeService;

    private final DepartmentService departmentService;

    private final DesignationService designationService;

    private final RoleService roleService;

    public AdminController(EmployeeService employeeService, DepartmentService departmentService,
                           DesignationService designationService, RoleService roleService) {
        this.employeeService = employeeService;
        this.departmentService = departmentService;
        this.designationService = designationService;
        this.roleService = roleService;
    }


    @GetMapping("/add_employee")
    public String getAddEmployeeScreen(Model model){
        model.addAttribute("request",new CreateUserRequest());
        model.addAttribute("managers",employeeService.findAccountByRoleName(RoleType.MANAGER));
        model.addAttribute("departments",departmentService.findAll());
        model.addAttribute("designations",designationService.findAll());
        return "/admin/add_employee";
    }

    @GetMapping("/add_certificate")
    public String getCertificateAddScreen(Model model){
        return "/admin/add_certificate";
    }

    @GetMapping("/manage_certificates")
    public String getManageCertificateScreen(Model model){
        return "/admin/manage_certificates";
    }

    @GetMapping("/add_leave_type")
    public String getAddLeaveTypeScreen(Model model){
        return "/admin/add_leave_type";
    }

    @GetMapping("/all_leaves")
    public String getAllLeavesScreen(Model model){
        return "/admin/all_leaves";
    }

    @GetMapping("/manage_leave_types")
    public String getManageLeaveTypesScreen(Model model){
        return "/admin/manage_leave_types";
    }

    @GetMapping("/reports")
    public String getReportsScreen(Model model){
        return "/admin/reports";
    }
}
