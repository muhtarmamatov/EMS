package com.ems.web;

import com.ems.dto.UserDTO;
import com.ems.service.EmployeeService;
import com.ems.service.util.Pager;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/public")
public class MainController {

    private final EmployeeService employeeService;

    public MainController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }


    @GetMapping("/login")
    public String getLoginScreen(Model model){
        return "/public/login";
    }

    @GetMapping("/index")
    public String getIndexPage(@RequestParam(value = "pageSize", required = false) Integer pageSize,
                               @RequestParam(value = "page", required = false) Integer page,
                               @RequestParam(value = "search", required = false) String search,Model model){

        //calculate current page size
        int selectedPageSize = Pager.calculateSelectedPageSize(pageSize);
        //calculate current page number
        int currentPage = Pager.calculateCurrentPage(page);

        //List result
        Page<UserDTO> employees = null;

        Pageable pageable = PageRequest.of(currentPage, selectedPageSize);
        if (search == null || "".equals(search)) {
            //if no search text defined, simply returns empty Page result
            employees = employeeService.findAll(pageable);
        } else {
            employees = employeeService.findByNameOrDepartment(search, pageable);
        }

        //initialize pagination helper class
        Pager pager = new Pager(employees.getTotalPages(), employees.getNumber(),
                Pager.getButtonRange(), selectedPageSize);

        model.addAttribute("employees",employees);
        model.addAttribute("pager", pager);
        model.addAttribute("search", search);

        return "/public/index";
    }

    @GetMapping("/apply_leave")
    public String getApplyLeaveScreen(){
        return "/public/apply_leave";
    }
    @GetMapping("/update_password")
    public String getUpdatePasswordScreen(){
        return "/public/update_password";
    }
    @GetMapping("/update_profile")
    public String getUpdateProfileScreen(){
        return "/public/update_profile";
    }

}
