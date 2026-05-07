package com.pineda.petstore;

import com.pineda.petstore.model.Pet;
import com.pineda.petstore.repository.PetRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PetstoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetstoreApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(PetRepository repository) {
		return args -> {
			if (repository.count() == 0) {
				// Original pets
				repository.save(new Pet(null, "Buddy", "DOG", 250.0, "A friendly golden retriever.", "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Whiskers", "CAT", 150.0, "A calm tabby cat.", "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Rio", "PARROT", 450.0, "A vibrant scarlet macaw.", "https://images.unsplash.com/photo-1552728089-57bdde30fc3b?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Hammy", "HAMSTER", 25.0, "A tiny syrian hamster.", "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Max", "DOG", 300.0, "An energetic husky.", "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Luna", "CAT", 180.0, "An elegant black cat.", "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Peanut", "HAMSTER", 20.0, "A fluffy dwarf hamster.", "https://images.unsplash.com/photo-1544601284-3982f05a3962?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Coco", "DOG", 400.0, "A cute brown poodle.", "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Sky", "PARROT", 200.0, "A playful blue budgie.", "https://images.unsplash.com/photo-1522926193917-458919d6f24e?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Oliver", "CAT", 220.0, "A curious ginger kitten.", "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800"));

				// New pets with Filipino names
				repository.save(new Pet(null, "Jose", "DOG", 280.0, "A loyal aspin dog.", "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Maria", "CAT", 190.0, "A gentle Siamese cat.", "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Juan", "PARROT", 350.0, "An intelligent grey parrot.", "https://images.unsplash.com/photo-1550929984-06900827902e?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Anita", "HAMSTER", 30.0, "A sweet golden hamster.", "https://images.unsplash.com/photo-1544601284-3982f05a3962?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Bong", "DOG", 320.0, "A playful buldog.", "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Lito", "CAT", 170.0, "A mischievous ginger cat.", "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Nena", "PARROT", 280.0, "A colorful cockatoo.", "https://images.unsplash.com/photo-1552728089-57bdde30fc3b?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Cardo", "DOG", 450.0, "A brave German Shepherd.", "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Darna", "CAT", 210.0, "A graceful white cat.", "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&q=80&w=800"));
				repository.save(new Pet(null, "Inday", "HAMSTER", 25.0, "A tiny roborovski hamster.", "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800"));
			}
		};
	}
}
