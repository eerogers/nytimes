import React, { Fragment } from "react";
import "../styles/AllStyles.css";
class Search extends React.Component {
    state = {
    };

    handleSearch = () => {
        alert("geronimo!")
    }
render() {
    return (
        <Fragment>
            <div id="box">
                <div id="subheader">Search</div>
                <form>
                <p>Topic: </p>
                <input type="text" class="entry" name="topic" value="Enter Topic for Search" />
                <p>Start Year:</p>
                <input type="text" class="entry" name="start" value="Enter Start Year for Search"/>
                <p>End Year:</p>
                <input type="text" class="entry" name="end" value="Enter End Year for Search" />
                <br />
                <input type="submit" id="search" value="Search" onClick={this.handleSearch}/>
                </form> 
            </div>
        </Fragment>
        )    
    }
}

export default Search;