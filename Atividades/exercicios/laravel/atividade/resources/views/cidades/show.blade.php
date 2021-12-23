@extends('principal')


@section('conteudo')

<h1>Dados da cidade</h1>

<p>{{ $cidade->id }}</p>
<h1>{{ $cidade->nome }}</h1>
<a href="{{ route('cidades.edit', $cidade->id) }}">Editar</a>
<a href="{{ route('cidades.index') }}" class="btn btn-primary">Voltar</a>
<form onsubmit="return confirm('Confirma a exclusão da cidade?')" action="{{ route('cidades.destroy', $cidade->id) }}" method="post">
    @csrf
    @method('DELETE')
    <input type="submit" value="Excluir" class="btn btn-danger">
</form>
@endsection
