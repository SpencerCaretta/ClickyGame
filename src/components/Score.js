import React from "react";

class Score extends React.Component {

    //Initial Score
    state = {
        count: 0
    };

    //handleIncrement function to increate score by one when a picture is clicked that has not been clicked yet
    handleIncrement = () => {
        this.setState({ score: this.state.score + 1 });
    }

    //Render method to return JSX
    render() {
        return (
            <div className="card text-center">
                <div className="card header bg-primary text-white">
                    ClickyGame
                </div>
                <div className="card-body">
                    <p className="card-text">Score: {this.state.score}</p>
                </div>
            </div>
        )
    }


}


export default Score;