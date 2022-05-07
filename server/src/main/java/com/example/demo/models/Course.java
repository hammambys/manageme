package com.example.demo.models;



import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.util.Set;


@Entity
@Table(	name = "courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;
    @Column(name = "published")
    private boolean published;
    @Column(name = "hours_per_week")
    private float hours_per_week;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(	name = "course_group",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "group_id"))
    @JsonIgnore
    private Set<Group> groups;
    @OneToMany(mappedBy = "course")
    private Set<CourseChapter> chapters;




    public Course() {
    }

    public Course(String title, String description, boolean published , float hours_per_week) {
        this.title = title;
        this.description = description;
        this.published = published;
        this.hours_per_week=hours_per_week;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isPublished() {
        return published;
    }

    public void setPublished(boolean published) {
        this.published = published;
    }

    public float getHours_per_week() {
        return hours_per_week;
    }

    public void setHours_per_week(float hours_per_week) {
        this.hours_per_week = hours_per_week;
    }

    public Set<Group> getGroups() {
        return groups;
    }

    public void setGroups(Set<Group> groups) {
        this.groups = groups;
    }


    public Set<CourseChapter> getCourseChapters() {
        return chapters;
    }

    public void setCourseChapters(Set<CourseChapter> chapters) {
        this.chapters = chapters;
    }
}
