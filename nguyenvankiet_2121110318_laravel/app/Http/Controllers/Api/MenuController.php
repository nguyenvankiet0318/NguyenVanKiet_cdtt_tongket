<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Str;



class MenuController extends Controller
{
    /*lay danh sach*/
    public function index()
    {
        $menus = Menu::orderBy('created_at','DESC')->get();
        return response()->json(['success' => true, 'message' => "Tải dữ liệu thành công", 'data' => $menus], 200);
    }

    /*lay bang id -> chi tiet */
    public function show($id)
    {
        $menu = Menu::find($id);
        return response()->json(['success' => true, 'message' => "Tải dữ liệu thành công", 'data' => $menu], 200);
    }

    /* them */
    public function store(Request $request)
    {
        $menu = new Menu();
        $menu->name = $request->name; //form
        if ($menu->name == 'Trang chủ') {
            $menu->link = '/';
        }
        if ($menu->name != 'Trang chủ') {
            $menu->link =  Str::of($request->name)->slug('-');
        }
        $menu->parent_id = $request->parent_id; //form
        $menu->table_id = $request->table_id; //form
        $menu->type = $request->type; //form
        $menu->position = $request->position; //form
        $menu->sort_order = $request->sort_order; //form
        $menu->level = $request->level; //form
        $menu->created_at = date('Y-m-d H:i:s');
        $menu->created_by = 1;
        $menu->status = $request->status; //form
        $menu->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thành công', 'data' => $menu], 201);
    }

    /*update*/
    public function update(Request $request, $id)
    {
        $menu = Menu::find($id);
        $menu->name = $request->name; //form
        if ($menu->name == 'Trang chủ') {
            $menu->link = '/';
        }
        if ($menu->name != 'Trang chủ') {
            $menu->link =  Str::of($request->name)->slug('-');
        }
        $menu->type = $request->type; //form
        $menu->table_id = $request->table_id; //form
        $menu->sort_order = $request->sort_order; //form
        $menu->position = $request->position; //form
        $menu->level = $request->level; //form
        $menu->parent_id = $request->parent_id; //form
        $menu->created_at = date('Y-m-d H:i:s');
        $menu->created_by = 1;
        $menu->status = $request->status; //form
        $menu->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thành công', 'data' => $menu], 201);
    }

    /* xoa */
    public function destroy($id)
    {
        $menu = Menu::find($id);
        if ($menu == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'id' => null],
                404
            );
        }
        $menu->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'id' => $menu], 200);

    }

    /*Lay du lieu len trang frontend */

    public function menu_list($position, $parent_id = 0, $status = 1)
    {
        $args = [
            ['position', '=', $position],
            ['parent_id', '=', $parent_id],
            ['status', '=', $status]
        ];
        $menus = Menu::where($args)->orderBy('sort_order', 'ASC')->get();
        if(count($menus))
        {
            return response()->json(
                [
                    'success' => true,
                    'message'  => 'Tải dữ liệu thành công',
                    'menus'  => $menus
                ],
                200
            );
        }
        else
        {
            return response()->json(
                [
                    'success' => false,
                    'message'  => 'Không có dữ liệu',
                    'menus'  => null
                ],
                200
            );
        }
        
    }
}