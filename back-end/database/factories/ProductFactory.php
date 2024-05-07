<?php
namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $productName = $this->faker->unique()->words($nb=2,$asText = true);
        $slug = Str::slug($productName);
        $imagePath = "r0FaQztGcDAg9qPCZqNp4KJYrQYoq4yDrx4mcNqp.png";   
        $categorieProduct = $this->faker->randomElement(['VET', 'INF']);

        return [
            'name' => Str::title($productName),
            'user_id' => 1,
            'slug' => $slug,
            'description' => $this->faker->text(20),
            'regular_price' => $this->faker->numberBetween(1,22),
            'featured' => $this->faker->randomElement(['accepted','pending','rejected']),
            'image' => $imagePath,
            'images' => json_encode(["r0FaQztGcDAg9qPCZqNp4KJYrQYoq4yDrx4mcNqp.png","r0FaQztGcDAg9qPCZqNp4KJYrQYoq4yDrx4mcNqp.png"]),
            'specification' => json_encode([["attribute" => "gb", "value" => "3"], ["attribute" => "color", "value" => "red"]]),
            'category_id' => $this->faker->numberBetween(1,6),
            'brand_id' => $this->faker->numberBetween(1,6),
            'categorie_product' => $categorieProduct
        ];
    }
}
