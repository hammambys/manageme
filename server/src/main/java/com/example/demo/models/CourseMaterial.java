package com.example.demo.models;


import javax.persistence.*;

@Entity
public class CourseMaterial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "link")
    private String link;
    @Column(name = "type")
    private String type;
    @Column(name="isVideo")
    private boolean isVideo;
    @ManyToOne
    @JoinColumn(name = "chapter")
    private CourseChapter courseChapter;

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

    public boolean isVideo() {
        return isVideo;
    }

    public void setVideo(boolean video) {
        isVideo = video;
    }

    public CourseChapter getCourseChapter() {
        return courseChapter;
    }

    public void setCourseChapter(CourseChapter courseChapter) {
        this.courseChapter = courseChapter;
    }
}
