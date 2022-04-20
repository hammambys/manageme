package com.example.demo.models;

import javax.persistence.*;


@Entity
@Table(name = "assignment_submission")
public class AssignmentSubmission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Assignment assignment;





}
