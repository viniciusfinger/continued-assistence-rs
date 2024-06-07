package com.viniciusfinger.rsflood.enums;

import lombok.Getter;

@Getter
public enum BiologicalSex {
    MALE("Masculino"),
    FEMALE("Feminino");

    private String description;

    BiologicalSex(String description) {
        this.description = description;
    }
}
