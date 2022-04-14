package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(	name = "group_list")
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name = "level")
    private EGroup level;

    @OneToMany(mappedBy = "group",
            cascade = CascadeType.ALL)
    private Set<User> users;

    @OneToMany(mappedBy = "group")
    private Set<Course> courses;



    public Group() {
    }

    public Group(String name, EGroup level) {
        this.name = name;
        this.level = level;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public EGroup getLevel() {
        return level;
    }

    public void setLevel(EGroup level) {
        this.level = level;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    public void setCourses(Set<Course> courses) {
        this.courses = courses;
    }

    public Set<Course> getCourses() {
        return courses;
    }
}
