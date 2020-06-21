# Config
## Comandos

Inicializa o repositório:

`git init`

Inicializa o projeto com o `yarn`:

`yarn init -y`

Adicona o TypeScript:

`yarn add typescript -D`

Inicialize o arquivo de configurações do TypeScript:

`yarn tsc --init`

Cria a pasta `src`:

`mkdir src`

Cria o arquivo de inicialização do servidor:

`touch src/serve.ts`

Adiciona o Express ao projeto:

`yarn add express`

Adiciona as tipagens do Typescript do Express:

`yarn add @types/express -D`

Adiciona a dependencia para rodar o node com  TypeScript em desenvolvimento:

`yarn add ts-node-dev -D`

Adiciona o script de execução do projeto no `package.json`:

```json
{
  ....
  "scripts": {
      "dev": "ts-node-dev --respawn --transpileOnly --ignore-watch node_modules --no-notify src/serve.ts"
  },
  ....
}
```

Agora é possível executar o projeto com:

`yarn dev`


Adicione o TypeORM

`yarn add typeorm reflect-metadata @types/node`

Adicione o MySQL

`yarn add mysql`

Habilite as configurações do Typescript no `tsconfig.json`

```json
  "emitDecoratorMetadata": true,
  "experimentalDecorators": true,
```

Inicialize o arquivo de configuração do TypeORM:

`yarn typeorm init`

## Executar o projeto

Rode o comando para instalar o modulos:

`yarn install`

Copie e configue o `.env`:

`mv .env.example .env`

Excute o projeto:

`yarn dev`

# Referências

[microsoft/TypeScript-Node-Starter](https://github.com/Microsoft/TypeScript-Node-Starter)  

[typeorm/typescript-express-example](https://github.com/typeorm/typescript-express-example)

[wanago.io](https://wanago.io/2019/01/14/express-postgres-relational-databases-typeorm/)  

[Building RESTful Web APIs with Node.js, Express, MongoDB and TypeScript](https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-3-d545b243541e)

[TypeORM](https://typeorm.io/#/)