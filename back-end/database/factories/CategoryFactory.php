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
        $category_name = $this->faker->unique()->randomElement(['hats', 'jackets', 't-shirts', 'shoes', 'jeans' ,'dresses','phones' ,'laptops','tablets' ,'watches' ,'accessories','printers' ]);
        return [
            'name' => Str::title($category_name),
            'slug' => $category_name,
            'parent_category' => $this->faker->randomElement(['VET','INF']),
        ];
    }
    
}