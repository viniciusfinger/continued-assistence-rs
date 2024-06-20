package com.viniciusfinger.rsflood.model;

import jakarta.persistence.*;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Home {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Address address;

    // Apartment number, home number in yard...
    private String complement;

    private Boolean isRented;

    @OneToOne
    private HomeStructure structure;

    @OneToMany(mappedBy = "home")
    private List<Necessity> necessities;

    @OneToMany
    private List<Person> persons;

    private Double averageFamilyIncome;
}
