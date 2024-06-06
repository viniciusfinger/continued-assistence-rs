package com.viniciusfinger.rsflood.enums;

import lombok.Getter;

@Getter
public enum NecessityCategory {

    CLEANING_MATERIAL("Material de Limpeza"),
    CLOTHES("Roupas"),
    PERSONAL_HYGIENE_MATERIAL("Material de Higiene Pessoal"),
    FOOD("Comida");

    private final String description;

    NecessityCategory(String description){
        this.description = description;
    }
}
