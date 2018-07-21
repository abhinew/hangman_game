import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';



export default class HomePage extends PureComponent {

    render() {
        return (
            <div>
                <h3>Welcome to Hangman</h3>
                <Link to="/hangman">Start Playing </Link>
            </div>
        )
            
        
    }
}