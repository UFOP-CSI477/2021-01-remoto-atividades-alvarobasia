<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCompraRequest;
use App\Http\Requests\UpdateCompraRequest;
use App\Models\Compra;
use App\Models\Pessoa;
use App\Models\Produto;

class CompraController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $compras = Compra::orderBy('data')->get();
        return view('compras.index', ['compras' => $compras]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $pessoas = Pessoa::orderBy('nome')->get();
        $produtos = Produto::orderBy('nome')->get();
        return view('compras.create', ['pessoas' => $pessoas], ['produtos' => $produtos]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCompraRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCompraRequest $request)
    {

        $compra =  new Compra();
        $compra->data = date("h:i:sa");
        $compra->pessoa_id = $request->pessoa_id;
        $compra->produto_id = $request->produto_id;
        $compra->save();
        session()->flash('mensagem', 'Compra cadastrada com sucesso!');
        return redirect()->route('compras.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Compra  $compra
     * @return \Illuminate\Http\Response
     */
    public function show(Compra $compra)
    {
        $pessoa = Pessoa::where('id', $compra->pessoa_id)->first();
        $produto = Produto::where('id', $compra->produto_id)->first();
        return view('compras.show', ['compra' => $compra, 'pessoa' => $pessoa, 'produto' => $produto]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Compra  $compra
     * @return \Illuminate\Http\Response
     */
    public function edit(Compra $compra)
    {
        $pessoas = Pessoa::orderBy('nome')->get();
        $produtos = Produto::orderBy('nome')->get();

        return view('compras.edit', ['compra' => $compra, 'pessoas' => $pessoas], ['produtos' => $produtos]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCompraRequest  $request
     * @param  \App\Models\Compra  $compra
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCompraRequest $request, Compra $compra)
    {
        $compra =  new Compra();
        $compra->pessoa_id = $request->pessoa_id;
        $compra->produto_id = $request->produto_id;
        $compra->save();
        session()->flash('mensagem', 'Compra atualizada com sucesso!');
        return redirect()->route('compras.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Compra  $compra
     * @return \Illuminate\Http\Response
     */
    public function destroy(Compra $compra)
    {
        $compra->delete();
        session()->flash('mensagem', 'Compra excluída com sucesso!');
        return redirect()->route('compras.index');
    }
}
