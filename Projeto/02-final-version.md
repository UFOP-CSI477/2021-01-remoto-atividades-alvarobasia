# **CSI606-2021-01 - Remoto - Trabalho Final - Resultados**

## \*Aluna(o): Álvaro Basílio de Araújo (19.1.8019)

---

Survey anything

O objetivo deste trabalho será criar um portal de enquetes no qual o usuário poderá criar enquetes e disponibilizá-las para outros usuários votarem.

<!-- Apresentar o tema. -->

### 1. Tema

O trabalho final tem como tema o desenvolvimento de um portal para criação de enquetes de diversos tipos

<!-- Descrever e limitar o escopo da aplicação. -->

### 2. Escopo

Este projeto terá as seguintes funcionalidades...

    - O usuário poderá se cadastrar com seus dados
    - O usuário poderá criar uma enquete
    - O usuário poderá votar em uma enquete
    - O usuário que criou a enquete poderá ver o resultado parcial
    - O usuário que criou a enquete poderá ver o resultado final
    - O usuário que criou a enquete poderá ver como cada pessoal votou

### 3. Restrições

    - O usuário não pode votar fora do tempo determinado da enquete
    - O usuário não pode votar na enquete que criou
    - O usuário precisa de uma conta cadastrada para votar e criar enquetes
    - O usuário não pode votar duas vezes na mesma enquete

<!-- Construir alguns protótipos para a aplicação, disponibilizá-los no Github e descrever o que foi considerado. //-->

### 4. Protótipo

Pode ser encontrado clicando em [https://www.figma.com/file/DM8OQGjMAbm6R4UznHfZMW/Untitled?node-id=0%3A1](https://www.figma.com/file/DM8OQGjMAbm6R4UznHfZMW/Untitled?node-id=0%3A1)

### 5. Como executar

Para executar instale um banco de dados PostgreSQL e o yarn, entre na pasta `back-end` rode o seguinte comando:

```
yarn
```

Crie um arquivo `.env` na raiz da pasta `back-end` com as informações necessárias para conexão com o banco de dados no qual será necessário informar a string de coneção:

```
DATABASE_URL="sua string aqui"
```

Após isso rode o seguinte comando:

```
npx prisma migrate dev
```

Após isso rode o seguinte comando:

```
npx prisma generate
```

Após isso rode o seguinte comando:

```
yarn start:dev
```

Apos isso entre na pasta `front-end` rode o seguinte comando:

```
yarn
```

Após isso rode o seguinte comando:

```
yarn dev
```

A aplicação está pronta e está sendo executada em `http://localhost:3000`.
