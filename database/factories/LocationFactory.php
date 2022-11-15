<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Location>
 */
class LocationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [

           'latitude' =>fake()->latitude($min=-90, $max=90), //77.147489
           'longitude' =>fake()->latitude($min=-180, $max=180) //120.211205
        ];
    }
}
