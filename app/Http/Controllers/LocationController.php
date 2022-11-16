<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Http\Request;
use App\Http\Requests\LocationRequest;
use GuzzleHttp\Psr7\Message;

class LocationController extends Controller
{
    /**
     * Display a latest resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function current(User $user)
    {
        return response()
                    ->json([
                        'data'=>'some random data'
                    ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        return response()
                    ->json([
                        'data'=>$user->locations
                    ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LocationRequest $request, User $user)
    {  
       
       $user->locations()->create($request->safe()->only(['user_id','latitude', 'longitude']));
       return response()
                ->json([
                    'message'=>"Location saved successfully"
                ],201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(LocationRequest $request, User $user, $id)
    {
        $user->locations()->update($request->safe()->only(['user_id','latitude', 'longitude']));
        return response()
                    ->json([
                        'message'=>'Location updated successfully'
                    ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, User $user, $id)
    {
        return response()
                    ->json([],204);
    }
}
