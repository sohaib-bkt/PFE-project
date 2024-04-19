<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $prduct_name = $this->faker->unique()->words($nb=2,$asText = true);
        $slug = Str::slug($prduct_name);
        $image_name = $this->faker->numberBetween(1, 24) . '.jpg';
        $image_path = 'assets/images/fashion/product/front/' . $image_name;
        $categorie_product = $this->faker->randomElement(['VET', 'INF']);

        return [
            'name' => Str::title($prduct_name),
            'user_id' => 1,
            'slug' => $slug,
            'short_description' => $this->faker->text(200),
            'description' => $this->faker->text(500),
            'regular_price' => $this->faker->numberBetween(1,22),
            'SKU' => 'SMD'.$this->faker->numberBetween(100,500),
            'stock_status' => 'instock',
            'quantity' => $this->faker->numberBetween(100,200),
            'image' => $image_path,
            'images' => $image_path,
            'category_id' => $this->faker->numberBetween(1,6),
            'brand_id' => $this->faker->numberBetween(1,6),
            'categorie_product' => $categorie_product 
        ];
    }
}