@extends('principal')

@section('conteudo')

<a href="{{route('produtos.create')}}">Cadastrar</a>

<table class="table table-striped table-bordered table-hover">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>un</th>
            <th>unidademedida</th>
        </tr>
    </thead>
    <tbody>
        @foreach($produtos as $p)

        <tr class="{{ $p->quantidade <= 1 ? 'danger' : '' }}">
            <td>{{ $p->id }}</td>
            <td>{{ $p->nome }}</td>
            <td>{{ $p->un }}</td>
            <td>{{ $p->unidademedida }}</td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
