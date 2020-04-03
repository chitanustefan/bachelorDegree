<?php

namespace App\Http\Controllers;

use App\tech;
use Illuminate\Http\Request;
use DB;

class TechController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }


    public function getTech(Request $request) {

       
        $id = $request->route('id');
        $teches = DB::table('teches')->where('id_user', $id)->get();
        //$teches = Tech::where('id_user', $id);
        //DB::table('users')->count();
        error_log($teches);
        return response()->json($teches);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         error_log('Tech');
         Tech::create($request->all());
         return response()->json(['message' => 'Tehnologii de interes adaugate cu succes']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\tech  $tech
     * @return \Illuminate\Http\Response
     */
    public function show(tech $tech)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\tech  $tech
     * @return \Illuminate\Http\Response
     */
    public function edit(tech $tech)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\tech  $tech
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, tech $tech)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\tech  $tech
     * @return \Illuminate\Http\Response
     */
    public function destroy(tech $tech)
    {
        //
    }
}
