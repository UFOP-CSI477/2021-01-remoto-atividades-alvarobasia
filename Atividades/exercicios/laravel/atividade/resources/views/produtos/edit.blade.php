@extends('principal')

@section('conteudo')
<form action="{{route('produtos.update', $produto->id)}}" method="post">
    @csrf
    @method('PUT')
    <div class="form-group">
        <label>Nome</label>
        <input type="text" name="nome" class="form-control" value="{{ $produto->nome}}">
    </div>
    <div class="form-group">
        <label>Descrição</label>
        <input type="text" name="descricao" class="form-control" value="{{ $produto->descricao}}">
    </div>
    <div class="form-group">
        <label>un</label>
        <input type="text" value="{{ $produto->un}}" name="un" class="form-control">
    </div>
    <div class="form-group">
        <label>unidademedida</label>
        <input type="text" name="unidademedida" value="{{ $produto->unidademedida}}" class="form-control">
    </div>
    <input type="submit" class="btn btn-primary" value="Editar">
</form>
@endsection
