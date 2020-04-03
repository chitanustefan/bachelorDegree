<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTechTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    //     Schema::create('teches', function (Blueprint $table) {
    //         $table->id();
    //         $table->integer('id_user');
    //         $table->string('tehnologie');
    //         $table->timestamps();
    //         $table->string('imgroot');
    //     });
     }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::dropIfExists('teches');
    }
}
