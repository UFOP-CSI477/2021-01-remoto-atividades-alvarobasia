<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\CidadeController;
use App\Http\Controllers\PessoaController;
use App\Http\Controllers\CompraController;
use App\Http\Controllers\EstadoController;

Route::get('/', function () {
    return view('principal');
});


Route::resource('/produtos', ProdutoController::class);

Route::resource('/cidades', CidadeController::class);

Route::resource('/pessoas', PessoaController::class);

Route::resource('/compras', CompraController::class);

Route::resource('/estados', EstadoController::class);

// Route::get('/produtos', function () {
//     $produtos = Produto::all();
//     return view('lista', ['produtos' => $produtos]);
// });


// Route::get('/produtos/{id}', function ($id) {
//     $produto =  Produto::findOrFail($id);

//     if ($produto == null) {
//         return response()->json(['error' => 'Produto não encontrado'], 404);
//     }

//     return view('produto', ['produto' => $produto]);
// });
