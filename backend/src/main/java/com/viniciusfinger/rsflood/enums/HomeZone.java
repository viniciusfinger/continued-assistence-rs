package com.viniciusfinger.rsflood.enums;

import lombok.Getter;

@Getter
public enum HomeZone {
    URBAN("Urbano"),
    RURAL("Rural");

    private final String description;

    HomeZone(String description) {
        this.description = description;
    }
}
