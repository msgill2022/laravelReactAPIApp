<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Location extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'latitude',
        'longitude'
    ];
    /**
     * @return belongsTo
     * @description get user detail of locations belongsTo
     */
   
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

}
