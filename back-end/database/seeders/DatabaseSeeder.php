<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
        ]);

        \App\Models\User::factory()->create([
            'name' => 'sohaib',
            'email' => 'sohaib@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'address' => 'address',
            'utype' => 'admin',
        ]);
        \App\Models\User::factory()->create([
            'name' => 'sohaib',
            'email' => 'sohaib1@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'address' => 'address',
            'utype' => 'admin',
        ]);
        \App\Models\User::factory()->create([
            'name' => 'sohaib',
            'email' => 'sohaib2@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'address' => 'address',
            'utype' => 'admin',
        ]);

    \App\Models\Category::factory(12)->create();
    \App\Models\Product::factory(10)->create();
    \App\Models\Report::factory(5)->create();


    }
}
