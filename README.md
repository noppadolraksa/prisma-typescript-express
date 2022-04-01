## Typescript Express Prisma API for ics's interview

1. update package

```
npm i
```

2. change .env.example file name into .env then update DATABASE_URL
3. generate prisma schema then migrate and seed the database

```
yarn prismaGenerate
yarn prismaDev
```

4. use nodemon as dev mode

```
yarn dev
```

5. if you want to reset database

```
yarn prismaReset
```
