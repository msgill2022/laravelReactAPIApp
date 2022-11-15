<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

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
}
