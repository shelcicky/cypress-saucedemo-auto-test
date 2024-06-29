# Cypress Saucedemo Auto Test

O objetivo deste projeto é exemplificar de forma prática uma automação de testes front end usando a ferramenta Cypress.
O site usado nesta bateria de testes foi o [Saucedemo](https://www.saucedemo.com/).

## 🚀 Get Started

### 📋 Pré-requisitos

-NodeJS 22+;

Para validar se o NodeJS está instalado e devidamente configurado no ambiente, execute o seguinte comando: 
```sh
node -v
```

O resultado deve ser algo semelhando com o texto abaixo:
```sh
v22.3.0
``` 

### 🔧 Instalação
Faça o clone do repositório
```sh
git clone git@github.com:shelcicky/cypress-saucedemo-auto-test.git
```

Acesse o diretório do projeto recém clonado: 
```sh
cd cypress-saucedemo-auto-test
```

Instale as dependências do projeto:
```sh
npm install
```

## ⚙️ Executando os testes
### - Escolha qual bateria de teste será executada;
Atualmente possuímos as seguintes opções:

`e2e:chrome` - Os testes serão executados no __browser Chrome__ (o browser ficará visível durante a execução).

`e2e:chrome:headless` - Os testes serão executados no __browser Chrome__ (o browser não ficará visível durante a execução).

`e2e` - Os testes serão executados no __browser Elecron__ (o browser ficará visível durante a execução).

`e2e:headless` - Os testes serão executados no __browser Elecron__ (o browser não ficará visível durante a execução).

OBS: As execuções usando o browser __Chrome__ requerem que o mesmo esteja __instalado__ no ambiente local.

### - Execute o seguinte comando no diretório raiz do projeto, substituindo os valores de `$(CY)` pela bateria de teste a ser desejada.   
Exemplo:
```sh
npm run $(CY)
npm run e2e:chrome:headless
```

## 🛠️ Construído com
* [NodeJs](https://nodejs.org/en) - Interpretador e executor de instruções JavaScript;
* [Cypress](https://www.cypress.io/) - Framework de automação de testes;

## ✒️ Autor
* **Shelcicky Wilkerson** - [LinkedIn](https://www.linkedin.com/in/shelcicky/) / [Github](https://github.com/shelcicky)