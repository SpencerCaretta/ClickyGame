import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
// import Score from "./components/Score";
import characters from "./characters.json";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
    //setting our list of characters = to the state
    state = {
      characters,
      score: 0,
      guessedCharacters: [0],
      playing: true,
      overheadText: "Click an Image to Begin"
    };

    //function to change the order of the characters after a character is clicked
    randomOrder = () => {
      let chars = this.state.characters;

      //randomize order of array
      function randomize(array) {
        let pickedIndex = array.length, randomIndex, tempValue;

        while( 0 !== pickedIndex) {
          //Choosing a random element
          randomIndex = Math.floor(Math.random() * pickedIndex);
          pickedIndex -= 1;

          //swap characters around
          tempValue = array[pickedIndex];
          array[pickedIndex] = array[randomIndex];
          array[randomIndex] = tempValue;
        }
        chars = array;
      }
      randomize(chars);
      this.setState({ characters: chars});
    }

    //Push the guessed character id into array
    updateGuessedCharacter = id => {
      let clickedCharacter = this.state.guessedCharacters;
      clickedCharacter.push(id);
      this.setState({ guessed: clickedCharacter });
    }

    //Update the player's score
    updatePlayerScore = () => {
      let playerScore = this.state.score;
      playerScore =  playerScore + 1;
      this.setState({ score: playerScore });
    }

    //function to check whether a clicked character has already been guessed
    checkCharacter = id => {
      let gameArray = this.state.guessedCharacters;

      function checkerFunction(id, array) {
        let guessed = false;

        for (let i = 0; i < array.length; i++) {
          if (id === array[i]) {
            guessed = true;

            return guessed;
          }
        }
        return guessed;
      }

      if(checkerFunction(id, gameArray) === true) {
        //Game Over
        this.setState({ playing: false })
        return true;
      } else {
        //Continue Playing
        return false;
      }
    }

    //update to page function when character is clicked
    handleUpdate = id => {
      if (this.state.playing === true && this.checkCharacter(id) === false) {
        //update guessed character array and player score with each click
        this.updateGuessedCharacter(id);
        this.updatePlayerScore();
        //changes overheadtext with correct guesss
        this.setState({ overheadText: "You guessed correctly!" })
      } else if (this.state.score === 12) {
        /*After the user gets a score of 12 and they click another character
        this lets them know they already won and resets the game*/
        this.resetGame()
        this.setState({ overheadText: "You win! You Got Them All! Play Again!"})
      } else {
        //reset game if not playing or a character has already been guessed
        this.resetGame();
        //sets overheadtext letter the player know they got it wrong
        this.setState({ overheadText: "You guessed incorrectly! Play Again!"})
      }
      this.randomOrder();
    }

    resetGame = () => {
      this.setState({
        characters,
        score: 0,
        guessedCharacters: [0],
        playing: true,
        overheadText: "Click an Image to Begin"
      })
    }

    componentDidMount() {
      this.randomOrder();
      this.resetGame();
    }
    

    //rendering the page
    render() {
      return (
        <Wrapper>
          <Header
          playerScore = {this.state.score}
          overheadText = {this.state.overheadText} 
          />
          <Wrapper>
            {this.state.characters.map(character => (
              <CharacterCard
                id={character.id}
                key={character.id}
                image={character.image}
                handleUpdate={this.handleUpdate}
              />
            ))}
          </Wrapper>
          <Footer />
        </Wrapper>

      );
    }

}

export default App;
