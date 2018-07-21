import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


class GamePage extends PureComponent {

    
    

    displayRandomWord() {
        let arr = []
        
        let numOfCharaters = this.props.selectedWord.length;
        for (let i=0; i<numOfCharaters; i++) {
            arr.push("_");
        }
        return arr.map(element => <input type="text" value="_"/>)
 
    }

    

    render () {
        console.log(this.props.selectedWord);
        return (
            <div>
                
                
                
                {this.displayRandomWord()}
                Enter Letter to guess: <input name="letter" type="text"/>
                <button>Make a guess</button>
                <button> New Game</button>
            </div>
        )
    }
}

const mapStateToProps =  (state) => {
    console.log(state.currentWord);
    return {
      selectedWord: state.currentWord
    }
}

export default connect(mapStateToProps)(GamePage)

