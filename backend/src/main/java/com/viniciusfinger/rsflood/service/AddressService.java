package com.viniciusfinger.rsflood.service;

import com.viniciusfinger.rsflood.model.Address;
import com.viniciusfinger.rsflood.repository.AddressRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AddressService {

    private final AddressRepository addressRepository;

    public AddressService(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    public Address save(Address address) {
        return addressRepository.save(address);
    }

    public Optional<Address> findById(Long id) {
        return addressRepository.findById(id);
    }

    //todo: não deveria ser uma exclusão lógica?
    public void deleteById(Long id) {
        addressRepository.deleteById(id);
    }

    public Iterable<Address> findAll(int page, int pageSize) {
        Pageable pageable = PageRequest.of(page, pageSize);
        return addressRepository.findAll(pageable);
    }
}
