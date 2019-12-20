import React, { Component } from 'react';
import HangmanContext from './Hangman.context';
import { randomWord } from '../../utility/randomwords';

 class HangmanProvider extends Component{
    
    state = { 
        incorrectGuessCount: 0, 
        incorrectMaxGuessCount:10, 
        guessed: new Set(), 
        incorrectGuesses:[], 
        answer:randomWord(), 
    };

    render() {
        return(
            <HangmanContext.Provider value={{
                incorrectGuessCount:this.state.incorrectGuessCount,
                incorrectMaxGuessCount:this.state.incorrectMaxGuessCount,
                guessed:this.state.guessed,
                incorrectGuesses:this.state.incorrectGuesses,
                answer:this.state.answer,
                handleGuess: (e) => {
                    let ltr = e;
                    console.log(e);
                    this.setState(st => ({
                      guessed: st.guessed.add(e),
                      incorrectGuessCount: st.incorrectGuessCount + (st.answer.includes(ltr) ? 0 : 1),
                      incorrectGuesses: !st.answer.includes(ltr)? [...st.incorrectGuesses,ltr]: [...st.incorrectGuesses]
                    }));
                },
                handleNewGame:()=>{
                    this.setState({
                        guessed: new Set(),
                        incorrectGuessCount: 0,
                        incorrectGuesses:[],
                        answer: randomWord(),
                      });
                } 
             }}>
                 { this.props.children }
             </HangmanContext.Provider>
        );
    }
    
}

export default HangmanProvider;








