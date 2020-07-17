import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import Header from './components/Header';
import Joke from './components/Jokes';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact={true} path='/' render={() => <Header><App/></Header> }></Route>
      <Route path='/jokes' render={() => <Header><Joke /></Header>}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

//console.log("renderizou");

// Promisse
// Em um objeto promise, o parâmetro será uma função que receberá dois atributos (resolve, reject), onde:
// resolve: será uma função que eu irei utilizar encadeando o método .then ao final da execução da minha promisse;
// reject: caso ocorrer algum problema na execução da minha promisse, irei chamar essa função, que encaderará o método
// .catch da minha promise.

/* new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('ho');
    resolve();
  }, 2000)      
}).then( () => {
  console.log('ho 1');
  console.log('ho 2');
}).catch( () => {
  console.log('erro!');
}); */


//componentDidMount
//componentWillUnmount

/* class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log('Roar.')
  }
}

const a = new Animal('Leão');
console.log(a);
console.log(a.falar());

class Humano extends Animal {
  constructor(nome, idade, cabelo) {
    super(nome);
    this.idade = idade;
    this.cabelo = cabelo;
  }

  falar() {
    console.log("Oi!");
  }

  apresentar(){
    console.log("Meno nome é", this.nome, "eu tenho", this.idade, "anos de idade", ",e o meu cabelo é", this.cabelo,".");
  }
}

const h = new Humano("James", "31", "Castanho")
console.log (h.falar());
console.log(h.apresentar());
 */