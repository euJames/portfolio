import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

ReactDOM.render(
  <App/>
  ,
  document.getElementById('root')
);

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