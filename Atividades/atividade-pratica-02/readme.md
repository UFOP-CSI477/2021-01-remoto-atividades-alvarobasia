Feito com ReactJS, NestJS e Prisma.
Para executar faça o seguinte:

Primeiro instale o yarn e o PostgreSQL, ápos isso crie um arquivo `.env` na raiz da pasta `back-end` com as informações necessárias para conexão com o banco de dados no qual será necessário informar a string de conexão:

```
DATABASE_URL="sua string aqui"
```

rode o seguinte comando na pasta `back-end`:

```
yarn
npx prisma migrate dev
npx prisma generate
yarn start:dev
```

rode o seguinte comando na pasta `front-end`:

```
yarn
yarn dev
```

A aplicação está sendo executada na porta 3000 e o back na porta 4000.
