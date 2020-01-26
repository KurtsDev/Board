<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'users';

    protected $fillable = [
        'user_ip',
        'user_agent'
    ];

    public function messages()
    {
        return $this->hasMany('App\Message');
    }

}
