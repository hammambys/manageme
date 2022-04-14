package com.example.demo.models;

import javax.persistence.*;


@Entity
@Table(name = "assignment_submission")
public class AssignmentSubmission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(mappedBy = "assignment")
    private Assignment assignment;

    @ManyToOne
    @JoinColumn(name = "enroll_id")
    private Enroll enroll;



}
