<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Admin',
            'email' => 'User1@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'address' => 'address',
            'utype' => 'admin',
            'created_at' => Carbon::now()->subMonths(2), 
        ]);

        





    \App\Models\User::factory(20)->create();

    \App\Models\Category::factory(12)->create();
    \App\Models\Product::factory(10)->create();
    \App\Models\Report::factory(5)->create();


    }
}
