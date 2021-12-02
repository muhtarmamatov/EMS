package com.ems.web.admin;

import com.ems.dto.DepartmentDTO;
import com.ems.dto.DesignationDTO;
import com.ems.exceptions.ApplicationServiceException;
import com.ems.exceptions.constant.ApplicationServiceExceptionType;
import com.ems.model.Designation;
import com.ems.service.DepartmentService;
import com.ems.service.DesignationService;
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
public class DesignationController {
    private final DesignationService designationService;

    private final DepartmentService departmentService;

    private final MessageResolver messageResolver;

    public DesignationController(DesignationService designationService, DepartmentService departmentService, MessageResolver messageResolver) {
        this.designationService = designationService;
        this.departmentService = departmentService;
        this.messageResolver = messageResolver;
    }

    @GetMapping("/add_designation")
    public ModelAndView getAddDesignationScreen(){
        ModelAndView model = new ModelAndView();
        List<DepartmentDTO> departments = departmentService.findAll();
        model.addObject("departments",departments);
        model.addObject("position",new Designation());
        model.setViewName("/admin/add_designation");
        return model;
    }

    @PostMapping("/add_designation")
    public ModelAndView addNewDesignation(@Valid @ModelAttribute("position") Designation position, BindingResult result,
                                          Locale locale){
        ModelAndView model = new ModelAndView();
        if (result.hasErrors()){
            model.setViewName("/admin/add_designation");
        }
        try {
            designationService.addDesignation(position);
            model.setViewName("/admin/manage_designation");
        }catch (ApplicationServiceException e){
            String message = "";
            if (e.getType().equals(ApplicationServiceExceptionType.ELEMENT_ALREADY_EXIST_EXCEPTION)){
                message = messageResolver.messageLocaleResolver(e.getType(), new String[]{position.getPositionNameEN()
                        ,position.getPositionNameRU()},locale);
            }else {
                message = messageResolver.messageLocaleResolver(e.getType(),
                        new String[]{position.getDepartment().getId().toString()},
                        locale);

            }
            model.addObject("error",message);
            model.addObject("departments", departmentService.findAll());
            model.setViewName("/admin/add_designation");
        }
        return model;
    }

    @GetMapping("/manage_designation")
    public ModelAndView getManageDesignationScreen(@RequestParam(value = "pageSize", required = false) Integer pageSize,
                                                   @RequestParam(value = "page", required = false) Integer page,
                                                   @RequestParam(value = "search", required = false) String search){
        ModelAndView model = new ModelAndView();
        //calculate current page size

        int selectedPageSize = Pager.calculateSelectedPageSize(pageSize);
        //calculate current page number
        int currentPage = Pager.calculateCurrentPage(page);


        Page<Designation> positions =null;

        Pageable pageable = PageRequest.of(currentPage,selectedPageSize);

        if (search == null || search.equals("")){
            positions = designationService.findAll(pageable);
        }else {
            positions = designationService.findByName(search,pageable);
        }
        //initialize pagination helper class
        Pager pager = new Pager(positions.getTotalPages(), positions.getNumber(),
                Pager.getButtonRange(), selectedPageSize);
        model.addObject("positions",positions);
        model.addObject("search",search);
        model.addObject("pager",pager);
        model.addObject("position",new Designation());
        return model;
    }

    @GetMapping("/edit_designation/{id}")
    @ResponseBody
    public DesignationDTO getDesignationEditScreen(@PathVariable(name = "id") Long id){
        return designationService.findDesignationById(id);
    }
}
