package com.viniciusfinger.rsflood.repository;

import com.viniciusfinger.rsflood.model.Address;
import jakarta.annotation.Nonnull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {

    @Nonnull
    Page<Address> findAll(@Nonnull Pageable pageable);

}
