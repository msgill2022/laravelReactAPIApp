<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;  

    private string $routePrefix = '/api/v1/users';  

  
    public function test_it_has_route_return_404_if_user_not_present()
    {

        $response = $this->get($this->routePrefix.'/somethingRandom');

        $response->assertStatus(404);
    }

    public function test_it_has_route_return_user_detail()
    {
        $this->withoutExceptionHandling();
        $user = User::factory()->create();
        
        $response = $this->get($this->routePrefix.'/'.$user->id);

        $response->assertOk();
        $response->assertJson([
            'data'=>
                $user->toArray()
            ]);

    }
}
