<?php

namespace Tests\Feature;

use App\Models\Location;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Models\User;

class LocationTest extends TestCase
{
    use RefreshDatabase;  

    private string $routePrefix = '/api/v1/users';  

    
  
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_it_has_nested_route_return_404_if_user_not_present()
    {

        $response = $this->get($this->routePrefix.'/somethingRandom/locations');

        $response->assertStatus(404);
    }

    public function test_it_has_nested_route_return_200_if_user_present()
    {
        $user = User::factory()->create();
        
        $response = $this->get($this->routePrefix.'/'.$user->id.'/locations');

        $response->assertOk();
    }

    public function test_it_returns_all_locations_of_current_user()
    {
        $user = User::factory()->create();
        $location = Location::factory()->create(['user_id'=>$user->id]);

        $response = $this->get($this->routePrefix.'/'.$user->id.'/locations');

        $response->assertOk();
        $response->assertJson([
            'data'=>[
                $location->toArray()
            ]
            ]);
    }

    public function test_it_has_api_route_that_accept_location_data_and_save_to_database()
    {
        $user = User::factory()->create();
        $newLocation = ['latitude'=>fake()->latitude($min=-90, $max=90), 
                            'longitude'=>fake()->latitude($min=-180, $max=180)];
        
        $newLocation['user_id' ] = $user->id;

        $response = $this->postJson($this->routePrefix.'/'.$user->id.'/locations', $newLocation);

        $response->assertCreated();
        $this->assertDatabaseHas('locations', $newLocation);

    }

    // public function test_it_reject_the_request_if_required_field_missing()
    // {
    //     $user = User::factory()->create();
    //     $newLocation = Location::factory()
    //                             ->create(['user_id'=>$user->id]);

    //     $response = $this->postJson($this->routePrefix.'/'.$user->id.'/locations', $newLocation->toArray());

    //     $response->assertSessionHasNoErrors();

    // }

}
