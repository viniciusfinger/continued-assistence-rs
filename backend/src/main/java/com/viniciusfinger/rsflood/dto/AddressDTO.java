package com.viniciusfinger.rsflood.dto;

import com.viniciusfinger.rsflood.enums.HomeZone;
import lombok.Data;

import java.util.List;

@Data
public class AddressDTO {

    private Long id;

    private String street;

    private String number;

    private String cep;

    private String neighbourhood;

    private String city;

    private HomeZone zone;

    private String observation;

    private List<HomeDTO> homes;

}
