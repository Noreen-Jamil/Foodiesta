import React from "react";
import { Options } from "../options/options.js";

const WelcomeSession = (props) => {
    return (
        <div id="welcome-container">
            <h1 id="logo-heading">{props.appName}</h1>
            <h5 className="welcome-description ">{props.slogan}</h5>
            <Options />
        </div>
    )
}
export default WelcomeSession;