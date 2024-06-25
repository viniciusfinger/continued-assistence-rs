package com.viniciusfinger.rsflood.model;

import com.viniciusfinger.rsflood.enums.NecessityCategory;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Necessity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    private String quantity;

    @Enumerated(EnumType.STRING)
    private NecessityCategory category;

}
