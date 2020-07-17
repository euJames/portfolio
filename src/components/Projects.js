import React, { Component } from 'react';
import PROJECTS from '../data/projects';

class Project extends Component {
    render() {
       // console.log('this.props', this.props);
        const { title, image, description, link } = this.props.project;
        return (
            <div style={{ display: 'inline-block' }}>
                <h3>{title}</h3>
                <img src={image} style={{ width: 200, height: 120 }}/>
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}


class Projects extends Component {
    render() {
        return (
            <div>
                <h1>Meus projetos</h1>
                {
                    PROJECTS.map(PROJECT => {
                        return (
                            <Project key={PROJECT.id} project={PROJECT} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Projects;