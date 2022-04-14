package com.example.demo.models;


import javax.persistence.*;

@Entity
@Table(	name = "material")
public class CourseMaterial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "link")
    private String link;
    @Column(name = "type")
    private String type;
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;



    public CourseMaterial(String link, String type) {
        this.link = link;
        this.type = type;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
