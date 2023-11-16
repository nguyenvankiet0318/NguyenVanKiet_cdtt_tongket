<?php

namespace App\Http\Controllers\Api;
use App\Models\Orderdetail;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderdetailController extends Controller
{
    public function index()
    {
        $orderdetail = Orderdetail::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $orderdetail],
            200
        );
    }
    public function show($id)
    {
        $orderdetail = Orderdetail::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $orderdetail],
            200
        );
    }
    public function store(Request $request)
    {
        $orderdetail = new orderdetail();
        $orderdetail->name = $request->name; //form
        $orderdetail->slug = Str::of($request->name)->slug('-');
        // $orderdetail->image = $request->name;
        $orderdetail->sort_order = $request->sort_order; //form
        $orderdetail->metakey = $request->metakey; //form
        $orderdetail->metadesc = $request->metadesc; //form
        $orderdetail->created_at = date('Y-m-d H:i:s');
        $orderdetail->created_by = 1;
        $orderdetail->status = $request->status; //form
        $orderdetail->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $orderdetail],
            201
        );
    }

    public function update(Request $request, $id)
    {
        $orderdetail = Orderdetail::find($id);
        $orderdetail->name = $request->name; //form
        $orderdetail->slug = Str::of($request->name)->slug('-');
        // $orderdetail->image = $request->name;
        $orderdetail->sort_order = $request->sort_order; //form
        $orderdetail->metakey = $request->metakey; //form
        $orderdetail->metadesc = $request->metadesc; //form
        $orderdetail->updated_at = date('Y-m-d H:i:s');
        $orderdetail->updated_by = 1;
        $orderdetail->status = $request->status; //form
        $orderdetail->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $orderdetail],
            200
        );
    }
    public function destroy($id)
    {
        $orderdetail=orderdetail::find($id);
        if($orderdetail==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $orderdetail->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $orderdetail],
            200
        );
}

}
