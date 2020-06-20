# Config
## Comandos

Inicializa o repositório:

`git init`

Inicializa o projeto com o `yarn`:

`yarn init -y`

Adicona o TypeScript:

`yarn add typescript -D`

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