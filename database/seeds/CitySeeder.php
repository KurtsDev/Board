<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\City;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cities')->truncate();

        City::unguard();

        foreach (City::$cities as $city) {
            City::create([
                'city' => $city
            ]);
        }

        City::reguard();
    }
}
