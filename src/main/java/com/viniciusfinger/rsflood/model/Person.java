package com.viniciusfinger.rsflood.model;

import com.viniciusfinger.rsflood.enums.BiologicalSex;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String cpf;

    private LocalDate birthDate;

    @Enumerated(EnumType.STRING)
    private BiologicalSex biologicalSex;

    private String phone;

    private Integer dependentsNumber;

    //PCD = CDC = Person with disability
    private boolean isPCD;
}
