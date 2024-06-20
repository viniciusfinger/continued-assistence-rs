package com.viniciusfinger.rsflood.enums;

import lombok.Getter;

@Getter
public enum PersonRace {
    WHITE("Branco"),
    BLACK("Preto"),
    YELLOW("Amarelo"),
    BROWN("Pardo"),
    INDIGENOUS("Indígena"),
    ASIAN("Asiático"),
    OTHER("Outro");

    private final String description;

    PersonRace(String description) {
        this.description = description;
    }
}
