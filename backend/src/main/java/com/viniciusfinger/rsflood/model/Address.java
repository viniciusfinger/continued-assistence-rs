package com.viniciusfinger.rsflood.model;

import java.util.List;

import com.viniciusfinger.rsflood.enums.HomeZone;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Cascade;

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

    //todo: its not saving address_it in home table, resolve.
    @OneToMany(mappedBy = "address", cascade = CascadeType.ALL)
    private List<Home> homes;

}
