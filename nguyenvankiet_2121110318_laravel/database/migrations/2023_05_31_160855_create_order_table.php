<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up():void
    {
        Schema::create('db_order', function (Blueprint $table) {
            $table->id(); //id
            $table->unsignedInteger('user_id');
            $table->string('name');
            $table->string('phone');
            $table->string('email');
            $table->string('address');
            $table->string('note');
            $table->timestamps(); //created_at, updated_at
            $table->unsignedInteger('updated_by')->nullable();
            $table->unsignedTinyInteger('status')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('db_order');
    }
}
