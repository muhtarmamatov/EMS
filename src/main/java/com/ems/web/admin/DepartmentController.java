package com.ems.web.admin;

import com.ems.dto.DepartmentDTO;
import com.ems.dto.UserDTO;
import com.ems.exceptions.ApplicationServiceException;
import com.ems.exceptions.constant.ApplicationServiceExceptionType;
import com.ems.model.Department;
import com.ems.model.constant.RoleType;
import com.ems.service.DepartmentService;
import com.ems.service.EmployeeService;
import com.ems.service.MessageResolver;
import com.ems.service.util.Pager;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;
import java.util.List;
import java.util.Locale;

@Controller
@RequestMapping("/admin")
public class DepartmentController {

    private final EmployeeService employeeService;

    private final DepartmentService departmentService;

    private final MessageResolver messageResolver;

    public DepartmentController(EmployeeService employeeService, DepartmentService departmentService, MessageResolver messageResolver) {
        this.employeeService = employeeService;
        this.departmentService = departmentService;
        this.messageResolver = messageResolver;
    }


    @GetMapping("/add_department")
    public ModelAndView getAddDepartmentScreen(){
        ModelAndView model = new ModelAndView();
        List<UserDTO> managers = employeeService.findAccountByRoleName(RoleType.MANAGER);
        model.addObject("managers",managers);
        model.addObject("department",new Department());
        model.setViewName("/admin/add_department");
        return model;
    }

    @PostMapping("/add_department")
    public ModelAndView addDepartment(@Valid @ModelAttribute(name = "department") Department department,
                                      BindingResult result, Locale locale){
        ModelAndView model = new ModelAndView();
        if (result.hasErrors()){
            model.setViewName("/admin/add_department");
        }
        try {
            departmentService.addDepartment(department);
            model.setViewName("/admin/manage_department");
        }catch (ApplicationServiceException e){
            String message = "";
            if (e.getType().equals(ApplicationServiceExceptionType.ELEMENT_ALREADY_EXIST_EXCEPTION)){
                message = messageResolver.messageLocaleResolver(e.getType(), new String[]{department.getDepartmentNameEN()
                        ,department.getDepartmentNameRU()},locale);
            }else {
                message = messageResolver.messageLocaleResolver(e.getType(),
                        new String[]{department.getManager().getId().toString()},
                        locale);

            }
            model.addObject("error",message);
            model.addObject("managers", employeeService.findAccountByRoleName(RoleType.MANAGER));
            model.setViewName("/admin/add_department");
        }
        return model;
    }

    @GetMapping("/manage_department")
    public ModelAndView getManageDepartmentScreen(@RequestParam(value = "pageSize", required = false) Integer pageSize,
                                                  @RequestParam(value = "page", required = false) Integer page,
                                                  @RequestParam(value = "search", required = false) String search){
        ModelAndView model = new ModelAndView();
        //calculate current page size
        int selectedPageSize = Pager.calculateSelectedPageSize(pageSize);
        //calculate current page number
        int currentPage = Pager.calculateCurrentPage(page);


        Page<DepartmentDTO> departments =null;

        Pageable pageable = PageRequest.of(currentPage,selectedPageSize);

        if (search == null || search.equals("")){
            departments = departmentService.findAll(pageable);
        }else {
            departments = departmentService.findDepartmentByName(search,pageable);
        }
        //initialize pagination helper class
        Pager pager = new Pager(departments.getTotalPages(), departments.getNumber(),
                Pager.getButtonRange(), selectedPageSize);
        model.addObject("departments",departments);
        model.addObject("search",search);
        model.addObject("pager",pager);

        return model;
    }

    @GetMapping(value = "/get_department_by_id/{id}")
    @ResponseBody
    public DepartmentDTO getDepartmentById(@PathVariable(value = "id") Long id){
        return departmentService.findDepartmentById(id);
    }

    @GetMapping(value = "/get_departments")
    @ResponseBody
    public List<DepartmentDTO> getDepartments(){
        return departmentService.findAll();
    }
}
