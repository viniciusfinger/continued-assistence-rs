package com.viniciusfinger.rsflood.model;

import java.util.List;

import com.viniciusfinger.rsflood.enums.HomeZone;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String street;

    private String number;

    private String cep;

    private String neighbourhood;

    private String city;

    @Enumerated(EnumType.STRING)
    private HomeZone zone;

    private String observation;

    @OneToMany(mappedBy = "address")
    private List<Home> homes;

}
