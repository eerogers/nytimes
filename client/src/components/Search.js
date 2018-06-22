import React, { Fragment } from "react";
import "../styles/AllStyles.css";
import Results from './Results.js'
import axios from 'axios'
class Search extends React.Component {
    state = {
        articles: []
    };

    handleSearch = (e,value) => {
        e.preventDefault()
        var apikey = "8145520545c544fcbec3b1c062e2a890"
        var q = this.state.topic
        var begin_date = this.state.start
        var end_date = this.state.end
        var query = `http://api.nytimes.com/svc/search/v2/articlesearch.json?&q=${q}&begin_date=${begin_date}&end_date=${end_date}&api-key=${apikey}`
        axios.get(query)
        //API.getArticles(this.state.topic, this.state.start, this.state.end)
        .then(res => {
          console.log(res);
          const articles = res.data.response.docs
          this.setState({ articles: articles });
          console.log("the state", this.state.articles)
        })
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
render() {
    return (
        <Fragment>
            <div id="box">
                <div id="subheader">Search</div>
                <form>
                <p>Topic: </p>
                <input type="text" className="entry" onChange={this.handleInputChange} name="topic"/>
                <p>Start Year:</p>
                <input type="text" className="entry" onChange={this.handleInputChange} placeholder="Format: YYYYMMDD" name="start"/>
                <p>End Year:</p>
                <input type="text" className="entry" onChange={this.handleInputChange} placeholder="Format: YYYYMMDD" name="end" />
                <br />
                <input type="submit" id="search" value="Search" onClick={this.handleSearch}/>
                </form> 
            </div>
            <div id="box">
                <div id="subheader">Results</div>
                <div id="results">{this.state.articles.map(article => {
                    return (<Results
                        key =  {article.web_url}
                        link = {article.web_url}
                        headline = {article.headline.main}
                        date = {article.pub_date}
                    />)
                    })} 
                </div>
            </div>
        </Fragment>
        )    
    }
}

export default Search;