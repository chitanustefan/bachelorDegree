<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Comment;

class comments extends Controller
{

    public function postCom(Request $request)
    {
       // error_log($request('desc'));
         Comment::create($request->all());
         return response()->json(['message' => 'Comentariu adaugat cu succes']);
    }

    public function getCom() {
       
        $coms = DB::table('comments')->get();
        return response()->json($coms);
    }

}
