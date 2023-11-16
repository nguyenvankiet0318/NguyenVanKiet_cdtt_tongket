<?php

namespace App\Http\Controllers\Api;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Facades\Auth;  
class UserController extends Controller
{
    /*lay danh sach*/
    public function index(){
        $users = User::all();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'users'=>$users],200);
    }

    /*lay thuong hieu bang id -> chi tiet */
    public function show($id){
        $user = User::find($id);
        if ($user==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'user' => null],404
            );
        }
         
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'user'=>$user],200);
    }
    

    /* them */
    public function store(Request $request){
        $user = new User();
        $user->name = $request->name; //form
        $user->email = $request->email; //form
        $user->phone = $request->phone; //form
        $user->username = $request->username; //form
        $user->password = $request->password; //form
        $user->address = $request->address; //form
         //upload image
         $files = $request->image;
         if ($files != null) {
             $extension = $files->getClientOriginalExtension();
             if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                 $filename = $user->slug . '.' . $extension;
                 $user->image = $filename;
                 $files->move(public_path('images/user'), $filename);
             }
         }
         //
        $user->roles = $request->roles;
        $user->created_at = date('Y-m-d H:i:s');
        $user->created_by = 1;
        $user->status = $request->status; //form
        $user->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thêm thành công', 'data' => $user],201); 
    }

    /*update*/
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->name; //form
        $user->email = $request->email; //form
        $user->phone = $request->phone; //form
        $user->username = $request->username; //form
        $user->password = $request->password; //form
        $user->address = $request->address; //form
        // $user->image = $request->name;
        $files= $request->image;
        if ($files!=null){
            $extension = $files->getClientOriginalExtension();
            if(in_array($extension,['jpg', 'png', 'gif', 'webp', 'jpeg']))
            {
                $filename= $user->slug. "." . $extension;
                $user->image= $filename;
                $files->move(public_path('images/user'), $filename);
            }
        }
        $user->roles = $request->roles;
        $user->created_at = date('Y-m-d H:i:s');
        $user->created_by = 1;
        $user->status = $request->status; //form
        $user->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thành công', 'data' => $user], 200);
    }

    /* xoa */
    public function destroy($id){
        $user = User::find($id);
        $user->delete();
        return response()->json(['success' => true, 'message' => 'Xóa thành công', 'user' => null],200);
}

public function register(Request $request)
{
    $user = new User;
    $user->name=$request->input('name');
    $user->email=$request->input('email');
    $user->password=Hash::make($request->input('password'));
    $user->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thêm thành công', 'data' =>$user],201); 
    
}
public function login(Request $request)
{
    $user=User::where('email',$request->email)->first();
    if(!$user||!Hash::check($request->password,$user->password))
    {
        return response()->json(['message'=>'Email or password not mathced']);
    }
    else{
        return response()->json(['success' => true, 'message' => 'Thành công', 'data' =>$user],201); 
    }
    
}

public function user()
{
    return Auth::user();
}

public function logout()
{
    $cookie = Cookie::forget('jwt');

    return response([
        'message' => 'Success'
    ])->withCookie($cookie);
}

}