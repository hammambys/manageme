package com.example.demo.models;

import javax.persistence.*;
import java.util.Set;

@Entity
public class CourseChapter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title")
    private String title;
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;
    @OneToMany(mappedBy = "courseChapter")
    private Set<CourseMaterial> courseMaterials;

    public CourseChapter() {
    }

    public CourseChapter(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Set<CourseMaterial> getCourseMaterials() {
        return courseMaterials;
    }

    public void setCourseMaterials(Set<CourseMaterial> courseMaterials) {
        this.courseMaterials = courseMaterials;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
