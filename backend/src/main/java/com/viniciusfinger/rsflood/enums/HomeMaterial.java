package com.viniciusfinger.rsflood.enums;

import lombok.Getter;

@Getter
public enum HomeMaterial {
    WOOD("Madeira"),
    MASONRY("Alvenaria");

    private final String description;

    HomeMaterial(String description) {
        this.description = description;
    }
}
