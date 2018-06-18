import React, { Fragment } from "react";
import "../styles/AllStyles.css";
class Header extends React.Component {

render() {
    return (
        <Fragment>
            <div id="header-box">
                <h1>New York Times Article Scrubber.</h1>
                <div id="subtitle">Search for and annotate articles of interest!</div>
            </div>
        </Fragment>
        )    
    }
}

export default Header;