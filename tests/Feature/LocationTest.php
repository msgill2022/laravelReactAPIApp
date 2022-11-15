<?php

namespace Tests\Feature;

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
        
        $response = $this->get($this->routePrefix.'/'.$user->id.'/locations');

        $response->assertOk();
        $response->assertJson([
            'data'=>[
                'something'
            ]
            ]);
    }
}
