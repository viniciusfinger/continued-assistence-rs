package com.viniciusfinger.rsflood.dto;

import com.viniciusfinger.rsflood.enums.FloorMaterial;
import com.viniciusfinger.rsflood.enums.HomeMaterial;
import com.viniciusfinger.rsflood.model.Address;
import com.viniciusfinger.rsflood.model.HomeStructure;
import lombok.Data;

import java.util.List;

@Data
public class HomeDTO {

    private Long id;

    private Address address;

    // Apartment number, home number in yard...
    private String complement;

    private Boolean isRented;

    private List<NecessityDTO> necessities;

    private List<PersonDTO> persons;

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
