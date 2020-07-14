import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();

        this.state = { counter: 0 };

        this.addCounter = this.addCounter.bind(this);
    }

    addCounter() {
        //this.state.counter = this.state.counter + 1;
        this.setState({ counter: this.state.counter + 1 });
        //console.log(this.state.counter);
    }
   
    render() {
        return (
             <div>
                <h1>Meu Portfolio</h1>
                <p>Olá, meu nome é James!</p>
                <p>Sou Desenvolvedor na empresa LINX S.A.</p>
                <p>Este é o meu primeiro app de exemplo para o treinamento de react!</p>
                <p>{ this.state.counter }</p>
                <button onClick={this.addCounter}>Add Counter</button>
            </div>
        )
    }
}

export default App;