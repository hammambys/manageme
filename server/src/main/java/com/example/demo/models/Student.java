package com.example.demo.models;

import javax.persistence.*;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @PrimaryKeyJoinColumn(name="user_id")
    private User user;



    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


}
