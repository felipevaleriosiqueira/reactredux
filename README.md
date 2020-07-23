# Exemplo de utilização do Redux #

Executei o comando:

npx create-react-app .

Instalei o redux e o react-redux

npm i redux react-redux --save

## Configuração do Redux ##

### Store ###

Onde fica armazenado o estado global da aplicação

Foi criada uma pasta store dentro de src.
Nesta pasta serão adicionados todos os stores da aplicação.

#### Função reducer ####
A função reducer retorna o próximo estado da aplicação, tendo como parâmetros o estado atual e a ação que deverá ser executada. Atualizando assim o estado.

informa o estado inicial da aplicação

##### Combine Reducers #####

Para uma melhor organização é interessante a criação de reducers para os demais módulos da aplicação.
Para fazer a junção dos reducer existe a função combineReducers do redux.

O combine reducer é exportado passando como parâmetro um objeto com todos os reducers.

##### Actions #####

Podem ser definidas tanto no componente quanto em um arquivo externo.
Retorna um objeto no formato:
```
{
    type: 'EXEMPLO_DE_NOME_DE_ACTION',
    dado1,
    dado2,
}
```

#### bindActionCreators ####

Faz a ligação das actions.

### Provider ###
Foi importado na App o Provider do react-redux e o store criado.
O Provider recebe na propriedade store o store que foi criado.

### Connect ###
Todos os componentes que precisarão de informações do estado global deveram importar o connect do react-redux.
O connect é usado para compartilhar uma informação, nesse caso estaremos compartilhando o estado.

Os componentes passam a exportar o retorno do connect.

O conect recebe como parâmetro uma função que recebe o estado e retorna as propriedades desejadas do estado pelo component.

Com isso, o componente passa a receber como parâmetro os dados requisitados no parâmetro do connect e uma função dispatch, que será usada para enviar as ações.

A partir desse momento, todas as informações, antes mantidas no estado do componente, passam a vir do estado do redux.


