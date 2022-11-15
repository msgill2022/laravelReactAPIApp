<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Validator;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, User $user)
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
    public function store(Request $request, User $user)
    {  
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
            'latitude' => 'required',
            'longitude' => 'required'
                ]);
        var_dump($validator->fails());     
        if($validator->fails()) {

            return response()
                        ->json([
                            'message'=>"Oops Something went wrong try again",
                            'error' => $validator->error()
                        ]);
        }        
       $user->locations()->create($request->all());
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
