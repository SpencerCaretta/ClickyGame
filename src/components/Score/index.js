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
            <ul class="nav navbar-nav navbar-right">
                <li>Score: {this.state.score || 0}</li>
            </ul>
        )
    }


}


export default Score;