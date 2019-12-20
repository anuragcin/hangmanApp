import React, { Component } from 'react';
import HangmanContext from '../../providers/Hangman/Hangman.context';
import './playarea.css';
class Playarea extends Component{
    static contextType = HangmanContext;

    generateButtons =  (atoz,handleGuess,guessed) => {
        return atoz.split("").map((ltr,i) => (
          <button
            key={i}
            value={ltr}
            onClick={(e) => handleGuess(e.target.value)}
            disabled={guessed.has(ltr)}
           >
            {ltr}
          </button>
        ));
      }

      guessedWord = (answer,guessed) => {
        return answer
        .split("")
        .map(ltr => (guessed.has(ltr) ? ltr : "_"));
    }

    render(){
        const atoz="abcdefghijklmnopqrstuvwxyz"; //a to z letter to input from user..
        const { incorrectGuessCount, incorrectMaxGuessCount, guessed, answer, incorrectGuesses, handleGuess, handleNewGame  }  = this.context; 
        const gameOver = incorrectGuessCount >= incorrectMaxGuessCount; // when no of wrong letters > total no of wrong letters
        const isWinner = this.guessedWord(answer,guessed).join("") === answer;  // guessed == answer means winner otherwise loser
        
        let playerStatus; // status of player..
        
        if (isWinner) playerStatus = "You Win!";
        if (gameOver) playerStatus = "You Lose!";
        
        return (
            <>
            <h1>Playarea..</h1>
            <h5># of remaining incorrect guesses: { incorrectMaxGuessCount - incorrectGuessCount } , 
                Incorrect letters: { incorrectGuesses.length === 0 ? 'None' : '{'+ incorrectGuesses + '}' } 
                <br/> Player Status: { (isWinner || gameOver) ? playerStatus : '***********'  }
            </h5>
            { gameOver || isWinner ? 
                <button onClick={ handleNewGame }>
                    Start New Game?
                </button>
                :null
            }
            <p style={{
                        letterSpacing: '1em',
                        margin: '0.4em -1em 0.1em 0',
                        }}
                        >
                        { !gameOver ? 
                            this.guessedWord(answer,guessed) 
                            : 'The correct guess: ' + answer}
                     </p>
            <p className = "Playarea-btns">{ this.generateButtons(atoz,handleGuess,guessed) }</p>
            </>
        );
    }
}

export default Playarea;