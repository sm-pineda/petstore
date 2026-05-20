package com.pineda.petstore.controller;

import com.pineda.petstore.model.Pet;
import com.pineda.petstore.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pets")
@CrossOrigin(origins = "*") // Allow all origins for development
public class PetController {

    private final PetService petService;

    @Autowired
    public PetController(PetService petService) {
        this.petService = petService;
    }

    @GetMapping
    public List<Pet> getAllPets(@RequestParam(required = false) String category) {
        if (category != null && !category.isEmpty()) {
            return petService.getPetsByCategory(category);
        }
        return petService.getAllPets();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pet> getPetById(@PathVariable Long id) {
        return petService.getPetById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Pet createPet(@RequestBody Pet pet) {
        return petService.savePet(pet);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pet> updatePet(@PathVariable Long id, @RequestBody Pet petDetails) {
        return petService.getPetById(id)
                .map(existingPet -> {
                    existingPet.setName(petDetails.getName());
                    existingPet.setCategory(petDetails.getCategory());
                    existingPet.setPrice(petDetails.getPrice());
                    existingPet.setDescription(petDetails.getDescription());
                    existingPet.setImageUrl(petDetails.getImageUrl());
                    return ResponseEntity.ok(petService.savePet(existingPet));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePet(@PathVariable Long id) {
        petService.deletePet(id);
        return ResponseEntity.noContent().build();
    }
}
