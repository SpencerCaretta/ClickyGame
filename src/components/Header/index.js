import React from "react";
import "./style.css";
import Score from "../Score";

function Header(props) {
    return (
        //Score component added to nav bar to show and update users' score
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">ClickyGame</a>
                </div>
                <ul class="nav navbar-nav">
                    <li>Click an Image to Begin</li>
                </ul>
                <Score />
            </div>
        </nav>
    )
}

export default Header;