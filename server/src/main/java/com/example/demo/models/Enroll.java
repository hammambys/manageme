package com.example.demo.models;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity
public class Enroll {
    @EmbeddedId
    private EnrollId enrollId;

}
