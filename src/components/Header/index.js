import React from "react";
import "./style.css";
// import Score from "../Score";

function Header(props) {
    return (
        //Score component added to nav bar to show and update users' score
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">ClickyGame</a>
                </div>
                <ul class="nav navbar-nav" id = "overheadText">
                    <li>{props.overheadText}</li>
                </ul>
                <span className = "nav navbar-nav navbar-right" id = "score">
                    Score: {props.playerScore}
                </span>
            </div>
        </nav>
    )
}

export default Header;