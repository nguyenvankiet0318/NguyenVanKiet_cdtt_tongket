<?php

namespace App\Http\Controllers\Api;
use App\Models\Contact;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
     /*lay danh sach*/
     public function index(){
        $contacts = Contact::all();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'contacts'=>$contacts],200);
    }

    /*lay bang id -> chi tiet */
    public function show($id){
        $contact = Contact::find($id);
        if ($contact==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'contact' => null],404
            );
        }
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'contact'=>$contact],200);
    }

    /* them */
    public function store(Request $request){
        $contact = new Contact();
        $contact->user_id = $request->user_id;//form
        $contact->name = $request->name; //form
        $contact->email = $request->email; //form
        $contact->phone = $request->phone; //form
        $contact->title = $request->title; //form
        $contact->content = $request->content; //form
        $contact->replay_id = $request->replay_id; //form
        $contact->created_at = date('Y-m-d H:i:s');
        $contact->created_by = 1;
        $contact->status = $request->status; //form
        $contact->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thêm thành công', 'data' => $contact],201); 
    }

    /*update*/
    public function update(Request $request,$id){
        $contact = Contact::find($id);
        $contact->user_id = $contact->user_id;//form
        $contact->name = $request->name; //form
        $contact->email = $request->email; //form
        $contact->phone = $request->phone; //form
        $contact->title = $request->title; //form
        $contact->content = $request->content; //form
        $contact->replay_id = $request->replay_id; //form
        $contact->created_at = date('Y-m-d H:i:s');
        $contact->created_by = 1;
        $contact->status = $request->status; //form
        $contact->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công', 'data' => $contact],200);
    }


    /* xoa */
    public function destroy($id)
    {
        $contact = Contact::find($id);
        if ($contact == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'id' => null],
                404
            );
        }
        $contact->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'id' => $contact], 200);

    }
    // public function report(Request $request)
    // {
    //     $validatedData = $request->validate([
    //         'name' => 'required',
    //         'email' => 'required|email',
    //         'content' => 'required',
    //     ]);

    //     $contact = Contact::create($validatedData);

    //     return response()->json([
    //         'message' => 'Contact created successfully',
    //         'contact' => $contact
    //     ]);
    // }
    public function report(Request $request)
{
    $contact = new Contact;
    $contact->name=$request->input('name');
    $contact->email=$request->input('email');
    $contact->content=$request->input('content');
    $contact->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Gửi thành công', 'data' =>$contact],201); 
    
}

}
