@extends('principal')

@section('conteudo')

<form action="{{ route('pessoas.update', $pessoa->id) }}" method="post">

    @csrf
    @method('put')

    <div class="form-group">
        <label for="nome">Nome</label>
        <input class="form-control" name="nome" value="{{ $pessoa->nome }}" id="nome" type="text">
    </div>

    <div class="form-group">
        <label for="pessoa_id">Estado</label>

        <select name="pessoa_id" id="pessoa_id" class="form-control">

            @foreach($cidades as $c)
            <option value="{{$c->id}}" @if($c->id == $pessoa->cidade_id) selected @endif>
                {{$c->nome}}
            </option>
            @endforeach

        </select>

    </div>

    <div class="text-right">
        <input type="submit" value="Atualizar" class="btn btn-primary">

    </div>

</form>

@endsection('conteudo')
