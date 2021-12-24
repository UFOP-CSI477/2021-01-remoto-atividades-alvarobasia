<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pessoa;
use App\Models\Cidade;

class PessoaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pessoas = Pessoa::orderBy('nome')->get();
        return view('pessoas.index', ['pessoas' => $pessoas]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $cidades = Cidade::orderBy('nome')->get();
        return view('pessoas.create', ['cidades' => $cidades]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $pessoa =  new Pessoa();
        $pessoa->nome = $request->nome;
        $pessoa->cidade_id = $request->cidade_id;
        $pessoa->save();
        session()->flash('mensagem', 'Pessoa cadastrada com sucesso!');
        return redirect()->route('pessoas.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pessoa  $pessoa
     * @return \Illuminate\Http\Response
     */
    public function show(Pessoa $pessoa)
    {
        $cidade = Cidade::where('id', $pessoa->cidade_id)->first();
        return view('pessoas.show', ['pessoa' => $pessoa, 'cidade' => $cidade]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pessoa  $pessoa
     * @return \Illuminate\Http\Response
     */
    public function edit(Pessoa $pessoa)
    {
        $cidades = Cidade::orderBy('nome')->get();
        return view(
            'pessoas.edit',
            [
                'pessoa' => $pessoa,
                'cidades' => $cidades
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param   \Illuminate\Http\Request  $request
     * @param  \App\Models\Pessoa  $pessoa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pessoa $pessoa)
    {
        $pessoa->nome = $request->nome;
        $pessoa->cidade_id = $request->cidade_id;
        $pessoa->save();

        session()->flash('mensagem', 'Pessoa atualizado com sucesso!');
        return redirect()->route('pessoas.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pessoa  $pessoa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pessoa $pessoa)
    {

        $pessoa->delete();
        session()->flash('mensagem', 'Pessoa excluída com sucesso!');
        return redirect()->route('pessoas.index');
    }
}
