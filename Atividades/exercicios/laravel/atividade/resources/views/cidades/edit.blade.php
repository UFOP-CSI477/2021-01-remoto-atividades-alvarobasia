@extends('principal')

@section('conteudo')
<form action="{{route('cidades.update', $cidade->id)}}" method="post">
    @csrf
    @method('PUT')
    <div class="form-group">
        <label>Nome</label>
        <input type="text" name="nome" class="form-control" value="{{ $cidade->nome}}">
    </div>
    <input type="submit" class="btn btn-primary" value="Editar">
</form>
@endsection
