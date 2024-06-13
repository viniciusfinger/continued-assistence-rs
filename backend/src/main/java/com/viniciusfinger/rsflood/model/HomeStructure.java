package com.viniciusfinger.rsflood.model;

import com.viniciusfinger.rsflood.enums.FloorMaterial;
import com.viniciusfinger.rsflood.enums.HomeMaterial;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class HomeStructure {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private HomeMaterial material;

    @Enumerated(EnumType.STRING)
    private FloorMaterial floorMaterial;

    //Caixa d'água
    private Boolean hasWaterTank;

    //Água encanada
    private Boolean hasWaterPipe;

    //Fossa séptica
    private Boolean hasSepticTank;

    private Integer roomsNumber;

    private Integer bathroomsNumber;

}
