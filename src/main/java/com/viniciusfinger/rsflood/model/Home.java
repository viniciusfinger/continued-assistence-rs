package com.viniciusfinger.rsflood.model;

import com.viniciusfinger.rsflood.enums.HomeZone;
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

    private String street;

    private String number;

    private String complement;

    private String cep;

    private String neighbourhood;

    private String city;

    private Boolean isRented;

    @Enumerated(EnumType.STRING)
    private HomeZone zone;

    @OneToOne
    private HomeStructure homeStructure;

    @OneToMany(mappedBy = "home")
    private List<Necessity> necessities;

    @OneToMany
    private List<Person> persons;

    private Double averageFamilyIncome;
}
