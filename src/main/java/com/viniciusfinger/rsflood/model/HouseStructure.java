package com.viniciusfinger.rsflood.model;

import com.viniciusfinger.rsflood.enums.HouseMaterial;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class HouseStructure {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private HouseMaterial material;

    private Integer roomsNumber;

    private Integer bathroomsNumber;

    //todo: add from cras
}
