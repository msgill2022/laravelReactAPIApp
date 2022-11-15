<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('locations', function (Blueprint $table) {
            $table->id();
            $table->float('latitude', 8,6);   //77.147489
            $table ->float('longitude', 9,6); //120.211205
            $table ->integer('user_id')->unsigned();

            $table->timestamps();

            /*@ connect locations table's user_id with Users table's id field */
            $table->foreign('user_id')
                            ->references('id')
                            ->on('users')
                            ->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('locations');
    }
};
