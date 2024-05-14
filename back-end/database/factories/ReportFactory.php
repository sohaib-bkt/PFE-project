<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Report>
 */
class ReportFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'id_reporter' => 1,
            'id_reported' => 1,
            'id_product' => $this->faker->numberBetween(1, 10),
            'message' => $this->faker->sentence,  
            'status' => $this->faker->randomElement(['1','0']),
        ];
    }
}
