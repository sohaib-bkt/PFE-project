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
            'name' => 'User1',
            'email' => 'User1@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'address' => 'address',
            'utype' => 'admin',
            'created_at' => Carbon::now()->subMonths(2), // Example: created 2 months ago
        ]);

        \App\Models\User::factory()->create([
            'name' => 'User2',
            'email' => 'User2@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'created_at' => Carbon::now()->subMonths(1), // Example: created 1 month ago
        ]);

        \App\Models\User::factory()->create([
            'name' => 'User3',
            'email' => 'User3@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'created_at' => Carbon::now()->subMonths(3), // Example: created 3 months ago
        ]);

        \App\Models\User::factory()->create([
            'name' => 'User4',
            'email' => 'User4@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'created_at' => Carbon::now()->subMonths(4), // Example: created 4 months ago
        ]);

        \App\Models\User::factory()->create([
            'name' => 'User5',
            'email' => 'User5@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'created_at' => Carbon::now()->subMonths(5), // Example: created 5 months ago

        ]);

        \App\Models\User::factory()->create([
            'name' => 'User6',
            'email' => 'User6@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'created_at' => Carbon::now()->subMonths(4), // Example: created 6 months ago
        ]);
        \App\Models\User::factory()->create([
            'name' => 'User7',
            'email' => 'User7@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'created_at' => Carbon::now()->subMonths(4), // Example: created 7 months ago
        ]);

        \App\Models\User::factory()->create([
            'name' => 'User8',
            'email' => 'User8@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'created_at' => Carbon::now()->subMonths(2), // Example: created 8 months ago
        ]);

        \App\Models\User::factory()->create([
            'name' => 'User9',
            'email' => 'User9@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'created_at' => Carbon::now()->subMonths(3), // Example: created 9 months ago
        ]);

        \App\Models\User::factory()->create([
            'name' => 'User10',
            'email' => 'User10@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'created_at' => Carbon::now()->subMonths(10), // Example: created 10 months ago
        ]);

        \App\Models\User::factory()->create([
            'name' => 'User11',
            'email' => 'User11@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'created_at' => Carbon::now()->subMonths(1), // Example: created 11 months ago
        ]);

        \App\Models\User::factory()->create([
            'name' => 'User12',
            'email' => 'User12@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'created_at' => Carbon::now()->subMonths(12), // Example: created 12 months ago
        ]);

        \App\Models\User::factory()->create([
            'name' => 'User13',
            'email' => 'User13@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'created_at' => Carbon::now()->subMonths(3), // Example: created 13 months ago
        ]);

        \App\Models\User::factory()->create([
            'name' => 'User14',
            'email' => 'User14@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'created_at' => Carbon::now()->subMonths(5), // Example: created 14 months ago
        ]);

        \App\Models\User::factory()->create([
            'name' => 'User15',
            'email' => 'User15@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'created_at' => Carbon::now()->subMonths(2), // Example: created 15 months ago
        ]);

        \App\Models\User::factory()->create([
            'name' => 'User16',
            'email' => 'User16@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'created_at' => Carbon::now()->subMonths(3), // Example: created 16 months ago
        ]);

        \App\Models\User::factory()->create([
            'name' => 'User17',
            'email' => 'User17@gmail.com',
            'password' => bcrypt('123456'),
            'phone' => '123456789',
            'created_at' => Carbon::now()->subMonths(3), // Example: created 17 months ago
        ]);








    \App\Models\Category::factory(12)->create();
    \App\Models\Product::factory(10)->create();
    \App\Models\Report::factory(5)->create();


    }
}
