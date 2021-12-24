@extends('principal')

@section('conteudo')

<h1>Dados da Pessoa</h1>

<p>{{ $pessoa->id }}</p>
<h1>{{ $pessoa->nome }}</h1>
<h1>{{ $cidade->nome }}</h1>



<h1>Dados da cidade</h1>

<p>{{ $cidade->id }}</p>
<h1>{{ $cidade->nome }}</h1>

<a href="{{route('pessoas.edit', $pessoa->id)}}">Editar</a>
<a href="{{ route('pessoas.index') }}">Voltar</a>

<form name="frmDelete" action="{{route('pessoas.destroy', $pessoa->id)}}" method="post">

    @csrf
    @method('DELETE')

    <input type="submit" value="Excluir">

</form>
@endsection
