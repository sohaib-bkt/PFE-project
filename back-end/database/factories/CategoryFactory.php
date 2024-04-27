<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $category_name = $this->faker->unique()->randomElement(['jeans', 'jacket', 't-shirt', 'hoodie', 'sneakers' ,'cap']);
        return [
            'name' => Str::title($category_name),
            'slug' => $category_name,
        ];
    }
    
}