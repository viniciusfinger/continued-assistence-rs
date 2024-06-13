package com.viniciusfinger.rsflood.dto;

import com.viniciusfinger.rsflood.enums.FloorMaterial;
import com.viniciusfinger.rsflood.enums.HomeMaterial;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HomeDTO {

    private String complement;

    private Boolean isRented;

    private Double averageFamilyIncome;

    private HomeMaterial material;

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
