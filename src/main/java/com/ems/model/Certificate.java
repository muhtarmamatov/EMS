package com.ems.model;

import com.ems.model.constant.CertificateStatus;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "T_CERTIFICATE")
@Data
@EqualsAndHashCode(callSuper = false)
public class Certificate extends AbstractEntity {

    @Column(name = "CERTIFICATE_NAME")
    private String certificateName;

    @Column(name = "CERTIFICATE_STATUS")
    @Enumerated(EnumType.STRING)
    private CertificateStatus certificateStatus;

    @OneToMany(mappedBy = "certificate",cascade = CascadeType.ALL)
    private List<EmployeeCertifications> employeeCertifications;
}
