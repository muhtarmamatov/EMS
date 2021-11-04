package com.ems.service.impl;

import com.ems.exceptions.ApplicationServiceException;
import com.ems.exceptions.constant.ApplicationServiceExceptionType;
import com.ems.model.Department;
import com.ems.model.Designation;
import com.ems.repository.DepartmentRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.Collections;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class DepartmentServiceImplTest {

    @InjectMocks
    private DepartmentServiceImpl target;

    @Mock
    private DepartmentRepository repository;

    @Captor
    private ArgumentCaptor<Department> departmentArgumentCaptor;


    @Test
    void findDepartmentByNameNotFound() {
        when(repository.findDepartmentByDepartmentNameENOrDepartmentNameRU
                (anyString(),anyString())).thenReturn(Optional.empty());

        ApplicationServiceException e =
                assertThrows(ApplicationServiceException.class,() ->
                        target.findDepartmentByName("Department01",
                                "Department02"));
       Mockito.verify(repository,Mockito.times(1))
               .findDepartmentByDepartmentNameENOrDepartmentNameRU("Department01",
                       "Department02");
        assertEquals(e.getType(), ApplicationServiceExceptionType.RECORD_NOT_FOUND_EXCEPTION);

    }

    @Test
    void findAll() {
        Department department = createDepartment();
        Page<Department> departments = new PageImpl<>(Collections.singletonList(department));
        Pageable page = PageRequest.of(1,1);
        when(repository.findAll(any(Pageable.class))).thenReturn(departments);

        Page<Department> result = target.findAll(page);
        Department name = result.getContent().get(0);

        verify(repository,times(1)).findAll(page);

        assertNotNull(result.getContent());
        assertEquals(1,result.getTotalElements());
        assertEquals("Department01",name.getDepartmentNameEN());
        assertEquals("Отдел01",name.getDepartmentNameRU());
        assertEquals(1, result.getTotalElements());
    }



    @Test
    void findDepartmentByName() {
        Department department = createDepartment();
        Page<Department> departments = new PageImpl<>(Collections.singletonList(department));
        Pageable page = PageRequest.of(1,1);
        when(repository.findDepartmentByName(anyString(),eq(page))).thenReturn(departments);
        Page<Department> result = target.findDepartmentByName("Department01",page);

        Department name = result.getContent().get(0);

        verify(repository,times(1)).findDepartmentByName("Department01",page);
        assertNotNull(result.getContent());
        assertEquals(1,result.getTotalElements());
        assertEquals("Department01",name.getDepartmentNameEN());
        assertEquals("Отдел01",name.getDepartmentNameRU());
        assertEquals(1, result.getTotalElements());
    }

    @Test
    void addDepartmentDepartmentExist() {
        Department department = createDepartment();

        when(repository.findDepartmentByDepartmentNameENOrDepartmentNameRU(anyString(),anyString()))
                .thenReturn(Optional.of(department));


        ApplicationServiceException e = assertThrows(ApplicationServiceException.class,
                ()->target.addDepartment(department));

        /*verify(repository,times(1))
                .findDepartmentByDepartmentNameENOrDepartmentNameRU(
                        "Dep01", "Отдел01");*/
        assertEquals(ApplicationServiceExceptionType.RECORD_ALREADY_EXIST_EXCEPTION,e.getType());
    }

    @Test
    void addDepartmentSuccess(){
        Department department = createDepartment();
        when(repository.save(department)).thenReturn(department);

        target.addDepartment(department);

        verify(repository,times(1)).save(departmentArgumentCaptor.capture());

        Department result = departmentArgumentCaptor.getValue();

        assertEquals(result,department);

    }

    @Test
    void removeDepartmentDepartmentNotExistException() {
        when(repository.findById(anyLong())).thenReturn(Optional.empty());
        ApplicationServiceException e = assertThrows(ApplicationServiceException.class,
                () -> target.removeDepartment(1L));

        verify(repository,times(1)).findById(1L);
        assertEquals(ApplicationServiceExceptionType.RECORD_NOT_FOUND_EXCEPTION,e.getType());
    }

    @Test
    void removeDepartmentSuccess() {

        Department department = new Department();

        department.setId(1L);
        department.setDepartmentNameEN("Department01");
        department.setDepartmentNameRU("Отдел01");
        department.setShortName("DEP");

        when(repository.findById(anyLong())).thenReturn(Optional.of(department));

        target.removeDepartment(1L);

        verify(repository,times(1)).findById(1L);
        verify(repository,times(1)).delete(departmentArgumentCaptor.capture());

        Department result = departmentArgumentCaptor.getValue();

        assertEquals(result,department);
    }

    @Test
    void removeDepartmentHasDesignationDependency(){
        Department department = createDepartment();
        when(repository.findById(anyLong())).thenReturn(Optional.of(department));
        ApplicationServiceException e = assertThrows(ApplicationServiceException.class,
                () -> target.removeDepartment(1L));

        verify(repository,times(1)).findById(1L);

        assertEquals(ApplicationServiceExceptionType
                .RECORD_HAS_DEPENDENCY_EXCEPTION,e.getType());
    }


    private Department createDepartment() {

        Designation designation = new Designation();
        designation.setPositionNameEN("Position01");
        designation.setPositionNameRU("Позиция01");

        Department department = new Department();

        department.setId(1L);
        department.setDepartmentNameEN("Department01");
        department.setDepartmentNameRU("Отдел01");
        department.setShortName("DEP");
        department.setDesignations(Collections.singletonList(designation));

        return department;
    }
}
