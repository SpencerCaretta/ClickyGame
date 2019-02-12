import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

class App extends Component {
    //setting our list of characters = to the state
    state = {
      characters
    };

    //rendering the page
    render() {
      return (
        <Wrapper>
          <Score />
          {this.state.friends.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </Wrapper>
      );
    }

}

export default App;
