<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Secret;
use Illuminate\Http\Request;

class SecretController extends Controller
{
    public function index(Request $request){
//        if(!$request->user())
//            return response()->json(['error' => 'User dosen not exist.'], 500);
//        return $request->user()->secrets;

        return Secret::all();
    }
}
