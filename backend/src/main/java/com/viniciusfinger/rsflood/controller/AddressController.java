package com.viniciusfinger.rsflood.controller;

import com.viniciusfinger.rsflood.model.Address;
import com.viniciusfinger.rsflood.service.AddressService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/addresses")
public class AddressController {

    private final AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @GetMapping
    public ResponseEntity<Iterable<Address>> findAll(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int pageSize
    ) {
        Iterable<Address> addresses = addressService.findAll(page, pageSize);

        return ResponseEntity.status(HttpStatus.OK).body(addresses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Address> findById(@PathVariable Long id) {
        Optional<Address> addressOptional = addressService.findById(id);

        if (addressOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.status(HttpStatus.OK).body(addressOptional.get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Address> delete(@PathVariable Long id) {
        addressService.deleteById(id);

        return ResponseEntity.ok().build();
    }

    @PostMapping
    public ResponseEntity<Address> create(@RequestBody Address address) {
        address = addressService.save(address);

        return ResponseEntity.status(HttpStatus.CREATED).body(address);
    }

    @PutMapping
    public ResponseEntity<Address> update(@RequestBody Address address) {
        address = addressService.save(address);

        return ResponseEntity.status(HttpStatus.OK).body(address);
    }
}
