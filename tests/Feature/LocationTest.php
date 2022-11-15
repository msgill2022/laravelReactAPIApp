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
        $this->withoutExceptionHandling();
        $user = User::factory()->create();
        $newLocation = ['latitude'=>fake()->latitude($min=-90, $max=90), 
                        'longitude'=>fake()->latitude($min=-180, $max=180),
                        'user_id' =>$user->id
                        ];
        
        
        $response = $this->postJson($this->routePrefix.'/'.$user->id.'/locations', $newLocation);

        $response->assertCreated();
        $this->assertDatabaseHas('locations', $newLocation);

    }

    public function test_it_reject_the_request_if_required_field_missing()
    {
        $user = User::factory()->create();
        $newLocation = ['latitude'=>null, 
                        'longitude'=>fake()->latitude($min=-180, $max=180),
                        'user_id' =>$user->id
                        ];

        $response = $this->postJson($this->routePrefix.'/'.$user->id.'/locations', $newLocation);
        $response->assertStatus(422);
        
        $newLocation = ['latitude'=>null, 
                        'longitude'=>null,
                        'user_id' =>$user->id
                        ];

        $response = $this->postJson($this->routePrefix.'/'.$user->id.'/locations', $newLocation);
        $response->assertStatus(422);

        $newLocation = ['latitude'=>null, 
                        'longitude'=>null,
                        'user_id' =>null
                        ];

        $response = $this->postJson($this->routePrefix.'/'.$user->id.'/locations', $newLocation);
        $response->assertStatus(422);

    }

    public function test_it_has_api_route_that_accept_location_data_for_update_and_updated_in_database()
    {
       
        $user = User::factory()->create();
        $existingLocation = Location::factory()->create([ 'user_id' =>$user->id]);  
       
        $newLocation = ['latitude'=>fake()->latitude($min=-90, $max=90), 
                        'longitude'=>fake()->latitude($min=-180, $max=180),
                        'user_id' =>$user->id
                        ];
        
        $response = $this->putJson($this->routePrefix.'/'.$user->id.'/locations/'.$existingLocation->id, $newLocation);

        $response->assertOk();
       
        $this->assertDatabaseHas('locations', $newLocation);

    }

    public function test_user_can_delete_location()
    {
       
        $user = User::factory()->create();
        $existingLocation = Location::factory()->create([ 'user_id' =>$user->id]);  
       
        $response = $this->deleteJson($this->routePrefix.'/'.$user->id.'/locations/'.$existingLocation->id);

        $response->assertStatus(204);
       
        $response->assertNoContent();

        $this->assertDatabaseMissing('locations', $existingLocation->toArray());

    }

}
