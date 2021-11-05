package com.ems.service.impl;

import com.ems.exceptions.ApplicationServiceException;
import com.ems.exceptions.constant.ApplicationServiceExceptionType;
import com.ems.model.Designation;
import com.ems.repository.DesignationRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.Collections;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class DesignationServiceImplTest {


    @InjectMocks
    private DesignationServiceImpl target;

    @Mock
    private DesignationRepository repository;


    @Captor
    private ArgumentCaptor<Designation> designationArgumentCaptor;

    @Test
    void findAll() {
        Designation designation = createDesignation();
        Page<Designation> page = new PageImpl<>(Collections.singletonList(designation));
        Pageable pageable = PageRequest.of(1,1);
        when(repository.findAll(any(Pageable.class))).thenReturn(page);
        Page<Designation> result = target.findAll(pageable);

        assertNotNull(result);
        assertEquals(page,result);
    }


    @Test
    void findByNameNotFoundException() {

        when(repository.findDesignationByPositionNameENOrPositionNameRU(anyString(),anyString()))
                .thenReturn(Optional.empty());
        ApplicationServiceException e = assertThrows(ApplicationServiceException.class,
                () -> target.findByName("dep01","По"));

        verify(repository,times(1))
                .findDesignationByPositionNameENOrPositionNameRU(anyString(), anyString());
        assertEquals(ApplicationServiceExceptionType.RECORD_NOT_FOUND_EXCEPTION,e.getType());
    }

    @Test
    void findByNameSuccess(){
        Designation designation = createDesignation();
        when(repository.findDesignationByPositionNameENOrPositionNameRU(anyString(),anyString()))
                .thenReturn(Optional.of(designation));

        Designation result = target.findByName("Dep01","По");

        verify(repository,times(1))
                .findDesignationByPositionNameENOrPositionNameRU("Dep01","По");

        assertNotNull(result);
        assertEquals(designation,result);
    }

    @Test
    void findByNamePagable() {
        Designation designation = createDesignation();
        Page<Designation> page = new PageImpl<>(Collections.singletonList(designation));
        Pageable pageable = PageRequest.of(1,1);
        when(repository.findDesignationByPositionNameENContainingOrPositionNameRUContaining(
                anyString(),anyString(),any(Pageable.class))).thenReturn(page);

        Page<Designation> result = target.findByName("sd",pageable);
        verify(repository,times(1))
                .findDesignationByPositionNameENContainingOrPositionNameRUContaining(
                "sd","sd",pageable);
        assertNotNull(result);
        assertEquals(page,result);
    }

    @Test
    void addDesignationExistException() {
        Designation designation = createDesignation();
        when(repository.findDesignationByPositionNameENOrPositionNameRU(anyString(),anyString()))
                .thenReturn(Optional.of(designation));
        ApplicationServiceException e = assertThrows(ApplicationServiceException.class,
                () -> target.addDesignation(designation));

        assertEquals(ApplicationServiceExceptionType.RECORD_ALREADY_EXIST_EXCEPTION,
                e.getType());
    }

    @Test
    void addDesignationSuccess(){
        Designation designation = createDesignation();
        when(repository.findDesignationByPositionNameENOrPositionNameRU(anyString(),anyString()))
                .thenReturn(Optional.empty());
        target.addDesignation(designation);

        verify(repository,times(1))
                .save(designationArgumentCaptor.capture());
        verify(repository,times(1))
                .findDesignationByPositionNameENOrPositionNameRU("Position","Позиция");
        Designation result = designationArgumentCaptor.getValue();

        assertNotNull(result);
        assertEquals(designation,result);

    }
    @Test
    void removeDesignationSuccess() {
        Designation designation = createDesignation();
        when(repository.findById(anyLong())).thenReturn(Optional.of(designation));

        target.removeDesignation(designation.getId());

        verify(repository,times(1)).findById(1L);
        verify(repository,times(1)).delete(designationArgumentCaptor.capture());
        Designation result = designationArgumentCaptor.getValue();

        assertNotNull(result);
        assertEquals(designation,result);
    }

    @Test
    void removeDesignationNotExistException(){
        when(repository.findById(anyLong())).thenReturn(Optional.empty());
        ApplicationServiceException e =
                assertThrows(ApplicationServiceException.class,
                        ()->target.removeDesignation(1L));

        verify(repository,times(1)).findById(1L);
        assertEquals(ApplicationServiceExceptionType.RECORD_NOT_FOUND_EXCEPTION,e.getType());
    }


    private Designation createDesignation() {

        Designation designation = new Designation();

        designation.setId(1L);
        designation.setPositionNameRU("Позиция");
        designation.setPositionNameEN("Position");
        designation.setPositionDescription("Description");

        return designation;
    }

}
