# Performando aplicações React Js

Este projeto foi criado através do [Create React App](https://github.com/facebook/create-react-app).

O foco deste projeto, foi aplicar conceitos de otimização de perfomance, numa aplicação simples.
Os tópicos abordados foram:

- memo & useMemo: para guardar valores.
- useCallback: para guardar funções.
- virtualização de componentes extensos.
- Lazy Loading para carregar componentes somente quando necessário.
- Extensão React DevTools.
- Entendimento do ciclo de renderização.
- Técnicas de análise de performance.

## Scripts disponíveis

Você pode executar os seguintes :scripts

### `npm start`

Executará a aplicação no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.

### `npm run build`

Vai gerar uma versão da aplicação dentro da pasta `build` disponível para rodar em produção.\

### `npm run analyze`

Para gerar um html que mostrará o tamanho total da aplicação e quais dependências estão ocupando maior espaço.

## Dependências utilizadas

- [json-server](https://www.npmjs.com/package/json-server): para rodar um servidor com uma api fake na porta 3333
- [react-virtualized](https://github.com/bvaughn/react-virtualized): virtualização de componentes
- source-map-explorer: Ajuda entender onde o código está mais pesado [Analyzing the Bundle Size](https://create-react-app.dev/docs/analyzing-the-bundle-size).

## Demo App

![demo app](/public/demo-app.png "Aplicativo de listagemr").
