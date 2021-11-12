package com.ems.model;

import javax.persistence.*;
import java.time.Instant;

@MappedSuperclass
public abstract class AbstractEntity {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    private Instant creationTime;

    private Instant lastModified;

    @PrePersist
    void createdAt() {

        final Instant i = Instant.now();
        creationTime = i;
        lastModified = i;
    }

    @PreUpdate
    void lastModified() {

        setLastModified(Instant.now());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Instant creationTime) {
        this.creationTime = creationTime;
    }

    public Instant getLastModified() {
        return lastModified;
    }

    public void setLastModified(Instant lastModified) {
        this.lastModified = lastModified;
    }

}
