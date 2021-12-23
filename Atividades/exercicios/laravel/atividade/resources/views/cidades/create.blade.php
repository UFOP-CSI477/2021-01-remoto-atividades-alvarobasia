@extends('principal')

@section('conteudo')
<form action="{{route('cidades.store')}}" method="post">
    @csrf
    <div class="form-group">
        <label>Nome</label>
        <input type="text" name="nome" class="form-control">
    </div>
    <input type="submit" class="btn btn-primary" value="Cadastrar">
</form>
@endsection
