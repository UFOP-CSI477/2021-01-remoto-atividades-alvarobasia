@extends('principal')

@section('conteudo')

<a href="{{route('cidades.create')}}">Cadastrar</a>

<table class="table table-striped table-bordered table-hover">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
        </tr>
    </thead>
    <tbody>
        @foreach($cidades as $c)

        <tr>
            <td>{{ $c->id }}</td>
            <td>{{ $c->nome }}</td>
            <td>
                <a href="{{route('cidades.show', $c->id)}}">
                    Exibir
                </a>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
