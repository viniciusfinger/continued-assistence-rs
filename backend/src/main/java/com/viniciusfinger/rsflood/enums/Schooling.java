package com.viniciusfinger.rsflood.enums;

import lombok.Getter;

@Getter
public enum Schooling {
    ILLITERATE("Analfabeto"),
    ELEMENTARY_CURSING("Cursando Fundamental"),
    ELEMENTARY_INCOMPLETE("Fundamental Incompleto"),
    ELEMENTARY_COMPLETE("Fundamental Completo"),
    HIGH_SCHOOL_INCOMPLETE("Médio Incompleto"),
    HIGH_SCHOOL_CURSING("Cursando Médio"),
    HIGH_SCHOOL_COMPLETE("Médio Completo"),
    HIGHER_EDUCATION_INCOMPLETE("Superior Incompleto"),
    HIGHER_EDUCATION_COMPLETE("Superior Completo"),
    POSTGRADUATE("Pós-Graduação");

    private final String description;

    Schooling(String description) {
        this.description = description;
    }
}
