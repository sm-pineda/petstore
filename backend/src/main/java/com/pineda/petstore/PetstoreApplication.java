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
				repository.save(new Pet(null, "Buddy", "DOG", 250.0, "A friendly golden retriever.", "https://i.redd.it/8rwdek5mgos21.jpg"));
				repository.save(new Pet(null, "Whiskers", "CAT", 150.0, "A calm tabby cat.", "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/10-07/Classic+Tabby+cat+laying+on+a+scratching+post-min.jpg"));
				repository.save(new Pet(null, "Rio", "PARROT", 450.0, "A vibrant scarlet macaw.", "https://parrothaven.uk/wp-content/uploads/2024/11/Macaw-3.jpg"));
				repository.save(new Pet(null, "Hammy", "HAMSTER", 25.0, "A tiny syrian hamster.", "https://www.rosewoodpet.com/uploads/images/FEXXXX-October-Blog4.jpg"));
				repository.save(new Pet(null, "Max", "DOG", 300.0, "An energetic husky.", "https://preview.redd.it/my-wife-and-i-just-got-our-first-puppy-a-6-month-old-v0-wqeihku0fju31.jpg?width=640&crop=smart&auto=webp&s=aca831a44dcf38e192d550ea64aa46b4caa666a4"));
				repository.save(new Pet(null, "Luna", "CAT", 180.0, "An elegant black cat.", "https://i0.wp.com/pawsny.org/wp-content/uploads/2020/03/Joy_new.jpg?resize=1024%2C768&ssl=1"));
				repository.save(new Pet(null, "Peanut", "HAMSTER", 20.0, "A fluffy dwarf hamster.", "https://www.thesprucepets.com/thmb/0nRenhYSzmbWa6EcQZUAlcOJJt4=/2000x0/filters:no_upscale():strip_icc()/GettyImages-556452039-5816c8b43df78cc2e811718d.jpg"));
				repository.save(new Pet(null, "Coco", "DOG", 400.0, "A cute brown poodle.", "https://preview.redd.it/my-3-month-miniature-poodle-out-of-curiosity-does-anyone-v0-kvxc45r8kxbb1.jpg?width=640&crop=smart&auto=webp&s=e807b61388817626ac5d27b68ddfea7a496751ff"));
				repository.save(new Pet(null, "Sky", "PARROT", 200.0, "A playful blue budgie.", "https://www.kaytee.com/-/media/Project/OneWeb/Kaytee/US/learn-care/everything-you-need-to-know-about-pet-parakeets/everything-you-need-to-know-about-pet-parakeets.jpg"));
				repository.save(new Pet(null, "Oliver", "CAT", 220.0, "A curious ginger kitten.", "https://preview.redd.it/is-anyone-selling-an-ginger-cat-a-male-kitten-ginger-cat-a-v0-gwsrs4scvkia1.jpg?auto=webp&s=3c9121e5934db15ff9adee78df635504c3d2a9bb"));

				// New pets with Filipino names
				repository.save(new Pet(null, "Jose", "DOG", 280.0, "A loyal aspin dog.", "https://www.petexpress.com.ph/cdn/shop/articles/Aspin_dog_breed_ad7ee9e0-01ab-4b23-89cd-b0a23963e21a.jpg?v=1772695514"));
				repository.save(new Pet(null, "Maria", "CAT", 190.0, "A gentle Siamese cat.", "https://i.redd.it/pu9rx7foqy2f1.jpeg"));
				repository.save(new Pet(null, "Juan", "PARROT", 350.0, "An intelligent grey parrot.", "https://www.birdsville.net.au/wp-content/uploads/2011/07/IMG_0689.jpg"));
				repository.save(new Pet(null, "Anita", "HAMSTER", 30.0, "A sweet golden hamster.", "https://cdn0.animalwised.com/en/razas/1/0/5/golden-hamster_501_0_1200.jpg"));
				repository.save(new Pet(null, "Bong", "DOG", 320.0, "A playful buldog.", "https://www.cedarlanebulldogs.com/wp-content/uploads/2019/09/Bulldog-at-Home.jpg"));
				repository.save(new Pet(null, "Lito", "CAT", 170.0, "A mischievous ginger cat.", "https://www.scottishspca.org/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-16-at-12.58.45_06be33b6-1369x1027.jpg"));
				repository.save(new Pet(null, "Nena", "PARROT", 280.0, "A colorful cockatoo.", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioOE2smFgunHrKR5SfR1taPUzQNJYuPZ684MeJG7KCquXGVUJr1jm8faWi36ia3CmEcSNFozoOEF4WfxYJ-0bVUfSPvlqMOkLzq3Ejs9v1Vk4UUEgAM-OEWQoVs3tPE6C0oKmZ8kqRyZ8/s1600/ahelpingwing-1550952886579+%25281%2529.jpg"));
				repository.save(new Pet(null, "Cardo", "DOG", 450.0, "A brave German Shepherd.", "https://www.doggoneproblems.com/wp-content/uploads/2017/03/Ella-West-Hollywood.jpg"));
				repository.save(new Pet(null, "Darna", "CAT", 210.0, "A graceful white cat.", "https://www.thesprucepets.com/thmb/sYXnJSc6YdV_Ct5I1sklVLmw9Tw=/4000x0/filters:no_upscale():strip_icc()/spruce-pets-white-cat-lays-on-tv-stand-42d6c6a45f9c4038a9137cf7000795d9.jpg"));
				repository.save(new Pet(null, "Inday", "HAMSTER", 25.0, "A tiny roborovski hamster.", "https://i.imgur.com/92PH9eb.jpg"));
			}
		};
	}
}
