import React, { Component } from 'react';

const TITLES = [
    'JavaScript',
    'HTML',
    'Python',
    'CSS',
    '...'
]

// Class Component
class Title extends Component {
    state = { titleIndex: 0, fadeIn: false};

    // Lifecycle component
    componentDidMount() {
        this.timeout = setTimeout( () => { this.setState({ fadeIn: false })}, 2000); 
        this.animateTitles();
    }
    
    // Lifecycle component
    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }
   
    // Helper method - utilizado para auxilizar no desenvolvimento do componente
    animateTitles = () => {
       this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex +1) % TITLES.length;

            this.setState({ titleIndex, fadeIn: true })

            this.timeout = setTimeout( () => { this.setState({ fadeIn: false })}, 2000); 
        }, 4000);
    }
    
    // Lifecycle component
    render() {
        const { titleIndex, fadeIn } = this.state
       
        const title = TITLES[titleIndex];
        return (
            <p className={ fadeIn? 'title-fade-in' : 'title-fade-out' }>Estou aprendendo a programar em {title}</p>
        )
    }
}

export default Title;