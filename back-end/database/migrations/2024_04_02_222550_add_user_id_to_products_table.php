<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
        $table->unsignedBigInteger('user_id')->after('id'); // 'id' est une colonne existante après laquelle vous voulez ajouter 'user_id'
        $table->foreign('user_id')->references('id')->on('users'); // Optionnel: ajouter une contrainte de clé étrangère
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained()->onDelete('cascade');

        });
    }
};
