package com.viniciusfinger.rsflood.enums;

import lombok.Getter;

@Getter
public enum HouseMaterial {
    WOOD("Madeira"),
    MASONRY("Alvenaria");

    private final String description;

    HouseMaterial(String description) {
        this.description = description;
    }
}
