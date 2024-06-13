package com.viniciusfinger.rsflood.enums;

import lombok.Getter;

@Getter
public enum FloorMaterial {

    CERAMIC("Cerâmica"),
    WOOD("Madeira"),
    CEMENT("Cimento"),
    PORCELAIN("Porcelanato"),
    LAMINATE("Laminado"),
    DIRT_FLOOR("Chão batido");

    private final String description;

    FloorMaterial(String description) {
        this.description = description;
    }
}
