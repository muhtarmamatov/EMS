package com.ems.web.admin;

import com.ems.dto.DepartmentDTO;
import com.ems.dto.DesignationDTO;
import com.ems.exceptions.ApplicationServiceException;
import com.ems.exceptions.ErrorResponseBuilder;
import com.ems.exceptions.constant.ApplicationServiceExceptionType;
import com.ems.model.Designation;
import com.ems.service.DepartmentService;
import com.ems.service.DesignationService;
import com.ems.service.util.Pager;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.util.List;
import java.util.Locale;

@Controller
@RequestMapping("/admin")
public class DesignationController {
   private final DesignationService designationService;
   private final DepartmentService departmentService;
   private final ErrorResponseBuilder builder;

    public DesignationController(DesignationService designationService,
                                 DepartmentService departmentService,
                                 ErrorResponseBuilder builder) {
        this.designationService = designationService;
        this.departmentService = departmentService;
        this.builder = builder;
    }

    @GetMapping("/manage_designation")
    public ModelAndView getAllDesignationScreen(@RequestParam(value = "pageSize", required = false) Integer pageSize,
                                                @RequestParam(value = "page", required = false) Integer page,
                                                @RequestParam(value = "search", required = false) String search){
        ModelAndView model = new ModelAndView();

        //calculate current page size
        int selectedPageSize = Pager.calculateSelectedPageSize(pageSize);
        //calculate current page number
        int currentPage = Pager.calculateCurrentPage(page);

        Page<DesignationDTO> designations = null;
        Pageable pageable = PageRequest.of(currentPage,selectedPageSize);

        if (search == null || search.equals("")){
            designations = designationService.findAll(pageable);
        }else {
            designations = designationService.findByName(search,pageable);
        }
        //initialize pagination helper class
        Pager pager = new Pager(designations.getTotalPages(), designations.getNumber(),
                Pager.getButtonRange(), selectedPageSize);
        model.addObject("positions",designations);
        model.addObject("search",search);
        model.addObject("pager",pager);
        model.addObject("position",new Designation());
        model.setViewName("/admin/manage_designation");
        return model;
    }

    @GetMapping("/add_designation")
    public ModelAndView getAddDepartmentScreen(){
        ModelAndView model = new ModelAndView();
        Designation designation = new Designation();
        List<DepartmentDTO> departments = departmentService.findAll();
        model.addObject("position",designation);
        model.addObject("add",true);
        model.addObject("departments",departments);
        model.setViewName("/admin/add_designation");
        return model;
    }

    @PostMapping("/add_designation")
    public ModelAndView addNewDesignation(@Valid @ModelAttribute(name = "position") Designation position,
                                          BindingResult result, Locale locale, RedirectAttributes attr){
        ModelAndView model = new ModelAndView();

        if (result.hasErrors()){
            model.addObject("departments",departmentService.findAll());
            model.setViewName("redirect:/admin/add_designation");
        }
        try {
            designationService.addDesignation(position);
            attr.addAttribute("success","Successfully created new Department");
            model.setViewName("redirect:/admin/manage_designation");
        }catch (ApplicationServiceException e){
           if (e.getType().equals(ApplicationServiceExceptionType.ELEMENT_ALREADY_EXIST_EXCEPTION)){
               String error = builder.build(e.getType().getCode(),
                       new String[]{position.getPositionNameEN(),position.getPositionNameRU()},locale);
               model.addObject("errors",error);
               model.addObject("departments",departmentService.findAll());
               model.setViewName("/admin/add_designation");
           }
           else {
               String error = builder.build(e.getType().getCode(), new String[]{"Department/Отдел"},locale);
               model.addObject("errors",error);
               model.addObject("departments",departmentService.findAll());
               model.setViewName("/admin/add_designation");
           }
        }
        return model;
    }

    @GetMapping("/edit_designation/{id}")
    public ModelAndView getEditDesignationPage(@PathVariable(name = "id",required = true) Long id,Locale locale){
        ModelAndView model = new ModelAndView();
        List<DepartmentDTO> departments = departmentService.findAll();
        try {
            DesignationDTO editPosition = designationService.findDesignationById(id);
            model.addObject("position",editPosition);
            model.addObject("departments",departments);
            model.setViewName("/admin/add_designation");
        }catch (ApplicationServiceException e){
            String error = builder.build(e.getType().getCode(),new String[]{id.toString()},locale);
            model.addObject("errors",error);
            model.addObject("departments",departments);
            model.setViewName("/admin/add_designation");
        }
        return model;
    }

    @PostMapping("/edit_designation/{id}")
    public ModelAndView editDesignation(@PathVariable(name = "id") Long id,
                                        @ModelAttribute(name = "position") @Valid Designation position,
                                        BindingResult result, Locale locale){
        ModelAndView model = new ModelAndView();

        List<DepartmentDTO> departments = departmentService.findAll();

        if (result.hasErrors()){
            model.addObject("position",designationService.findDesignationById(id));
            model.addObject("departments",departments);
            model.setViewName("/admin/add_designation");
        }

        try {
            designationService.updateDesignation(id,position);
            model.setViewName("redirect:/admin_manage_designation");
        }catch (ApplicationServiceException e){
            String error = builder.build(e.getType().getCode(),new String[]{position.getPositionNameEN()},locale);
            model.addObject("errors",error);
            model.addObject("departments",departments);
            model.addObject("position",designationService.findDesignationById(id));
            model.setViewName("/admin/add_designation");
        }
        return model;
    }
}
