package com.viniciusfinger.rsflood.dto;

import com.viniciusfinger.rsflood.enums.NecessityCategory;

import lombok.Data;

@Data
public class NecessityDTO {

    private Long id;

    private String description;

    private Long quantity;

    private NecessityCategory category;
}
