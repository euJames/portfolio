import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = ({ children }) => {
    
   /*  const style = {
        display: 'inline-block',
        margin: 10,
        maringBottom: 30
    } */

    return (
        <div>
            <div>
                <h3 className='link'><Link to='/'>Home</Link></h3>
                <h3 className='link'><Link to='/jokes'>Jokes</Link></h3>
            </div>
            { children }
        </div>
    )
}

export default Header;