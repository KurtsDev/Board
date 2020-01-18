<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $table = 'messages';

    protected $fillable = [
        'name',
        'email',
        'phone',
        'title',
        'message',
        'city_id',
    ];

    protected $appends = ['show'];

    public function getShowAttribute()
    {
        return false;
    }

    public function getNameAttribute($name)
    {
        return $name !== null ? '('.$name.')' : null;
    }

}
