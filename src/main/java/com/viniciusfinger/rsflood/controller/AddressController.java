package com.viniciusfinger.rsflood.controller;

import com.viniciusfinger.rsflood.enums.HomeZone;
import com.viniciusfinger.rsflood.model.Address;
import com.viniciusfinger.rsflood.model.Home;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Slf4j
@Controller
@RequestMapping("/address")
public class AddressController {

    @GetMapping
    public String openAddressList(Model model) {
        Address address = new Address();
        address.setId(1L);
        address.setStreet("Rua Alberto Bins");
        address.setNumber("123");
        address.setCity("Canoas");
        address.setNeighbourhood("Niterói");
        address.setCep("92110-000");
        address.setZone(HomeZone.URBAN);
        address.setObservation("Observação sobre algo importante.");
        address.setHomes(List.of(new Home()));

        model.addAttribute("addresses", List.of(address));
        return "address-list";
    }

    @GetMapping("/new")
    public String openAddressForm(Model model) {
        model.addAttribute("address", new Address());
        return "address-form";
    }

    @PostMapping
    public String submitAddressForm(Address address, Model model) {
        model.addAttribute("address", address);
        log.info("Address saved: {}", address);

        model.addAttribute("addresses", List.of(address));
        return "address-list";
    }
}
