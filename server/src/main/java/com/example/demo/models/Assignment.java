package com.example.demo.models;


import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "assignments")
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    @Column(name="description")
    private String description;

    @Column(name="deadline")
    private LocalDateTime deadline;

    @Column(name="attached_files")
    @ElementCollection(targetClass=String.class)
    private Set<String> attached_files;

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDateTime deadline) {
        this.deadline = deadline;
    }

    public Set<String> getAttached_files() {
        return attached_files;
    }

    public void setAttached_files(Set<String> attached_files) {
        this.attached_files = attached_files;
    }
}
