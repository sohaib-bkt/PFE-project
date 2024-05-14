<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;

    // Define which attributes you want to be mass assignable
    protected $fillable = [
        'id_reporter', 'id_reported', 'status', 'message', 'id_product'
    ];

    // Define relationships, for example
    public function reporter()
    {
        return $this->belongsTo(User::class, 'id_reporter');
    }

    public function reported()
    {
        return $this->belongsTo(User::class, 'id_reported');
    }
}
