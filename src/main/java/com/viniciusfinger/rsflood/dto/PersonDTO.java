package com.viniciusfinger.rsflood.dto;

import com.viniciusfinger.rsflood.enums.BiologicalSex;
import com.viniciusfinger.rsflood.enums.Schooling;
import com.viniciusfinger.rsflood.model.PersonRace;

import lombok.Data;
import java.time.LocalDate;

@Data
public class PersonDTO {
    private Long id;

    private String name;

    private String cpf;

    private LocalDate birthDate;

    private PersonRace race;

    private BiologicalSex biologicalSex;

    private String phone;

    private Boolean hasDocuments;

    //Colabora com a renda familiar
    private Boolean collaborateFamilyIncome;

    private String profession;

    private Schooling schooling;

    private Integer dependentsNumber;

    private boolean isPCD;
}
