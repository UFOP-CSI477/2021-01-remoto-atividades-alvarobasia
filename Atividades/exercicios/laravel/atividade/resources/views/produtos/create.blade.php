@extends('principal')

@section('conteudo')
<form action="{{route('produtos.store')}}" method="post">
    @csrf
    <div class="form-group">
        <label>Nome</label>
        <input type="text" name="nome" class="form-control">
    </div>
    <div class="form-group">
        <label>Descrição</label>
        <input type="text" name="descricao" class="form-control">
    </div>
    <div class="form-group">
        <label>un</label>
        <input type="text" name="un" class="form-control">
    </div>
    <div class="form-group">
        <label>unidademedida</label>
        <input type="text" name="unidademedida" class="form-control">
    </div>
    <input type="submit" class="btn btn-primary" value="Cadastrar">
</form>
@endsection
