package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table(name="student_course_details")
public class StudentCourseDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;




    @Column(name="grade")
    private float grade;

    @Column(name="rating")
    private float rating;

    @Column(name="feedback")
    private String feedback;



    public float getGrade() {
        return grade;
    }

    public void setGrade(float grade) {
        this.grade = grade;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }
}
