@extends('principal')


@section('conteudo')

<h1>Dados do produto</h1>

<p>{{ $produto->id }}</p>
<h1>{{ $produto->nome }}</h1>
<p>{{ $produto->un }}</p>
<p>{{ $produto->unidademedida }}</p>
<a href="{{ route('produtos.edit', $produto->id) }}">Editar</a>
<a href="{{ route('produtos.index') }}" class="btn btn-primary">Voltar</a>
<form onsubmit="return confirm('Confirma a exclusão do estado?')" action="{{ route('produtos.destroy', $produto->id) }}" method="post">
    @csrf
    @method('DELETE')
    <input type="submit" value="Excluir" class="btn btn-danger">
</form>
@endsection
