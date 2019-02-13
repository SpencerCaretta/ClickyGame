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
      characters
    };

    //function to change the order of the characters after a character is clicked
    randomOrder = () => {

    }
    //update the id to say it has been clicked on, but not remove the character from the page


    

    //rendering the page
    render() {
      return (
        <Wrapper>
          <Header />
          <Wrapper>
            {this.state.characters.map(character => (
              <CharacterCard
                id={character.id}
                key={character.id}
                image={character.image}
              />
            ))}
          </Wrapper>
          <Footer />
        </Wrapper>

      );
    }

}

export default App;
