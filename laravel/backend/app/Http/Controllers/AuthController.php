<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\User;
use Illuminate\Http\Request;
use DB;
use App\Comment;

class AuthController extends Controller
{

    protected $user;

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register','avatar','me']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = Auth::guard()->attempt($credentials)) {
            return response()->json(['error' => 'Email or password doesn\'t exits.'], 401);
        }
        return $this->respondWithToken($token);
    }

    public function register(RegisterRequest $request)
    {
        User::create($request->all());
        return $this->login($request);
    }


    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {   
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        Auth::guard()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function avatar(Request $request)
    {
         $userId = $request->route('id');
         $user = User::findOrFail($userId);
         error_log($user->name);
        if ($request->hasFile('image'))
        {
            $file      = $request->file('image');
            $filename  = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $picture   = date(time()).'-'.$filename; 
            $file->move('D:\Facultate\DAW\tema1\ClientApp\src\assets\avatars', $picture);
            //$file->move(public_path('avatars'), $picture);
            error_log($picture);
            User::where('id', $userId)->update( array('avatar'=> $picture));
            Comment::where('id', $userId)->update( array('imgroot'=> $picture));
            $user = User::findOrFail($userId);
            return response()->json([$user]);
        }  
        else
        {
              return response()->json(["message" => "Image Uploaded Error"]);
        }
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(Auth::guard()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::guard()->factory()->getTTL() * 60,
            'user' => Auth::guard()->user()->name
        ]);
    }
}