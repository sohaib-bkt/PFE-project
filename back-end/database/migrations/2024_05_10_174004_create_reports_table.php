<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_reporter');
            $table->unsignedBigInteger('id_reported');
            $table->unsignedBigInteger('id_product');
            $table->boolean('status')->default(false);
            $table->text('message');
            $table->timestamps();

            // Foreign keys constraints (Optional, uncomment if needed)
            $table->foreign('id_reporter')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('id_reported')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};
