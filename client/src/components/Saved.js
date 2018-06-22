import React, { Fragment } from "react";
import "../styles/AllStyles.css";
import SavedData from './SavedData'
import axios from 'axios'
class Saved extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        this.loadSaved();
      }
    
      loadSaved = () => {
        axios.get('/articles')
          .then(r => {
            console.log(r)
            const articles = r.data
            this.setState({ articles: articles })
            console.log(this.state)
          })
          .catch(err => {
              console.log(err)
          });
      };

render() {
    return (
        <Fragment>
            <div id="box">
                <div id="subheader">Saved</div>
                <div id="results">{this.state.articles.map(article => {
                    return (<SavedData
                        key = {article.title}
                        title =  {article.title}
                        date = {article.date}
                        url = {article.url}
                    />)
                    })} 
                </div>
            </div>
        </Fragment>
        )    
    }
}

export default Saved;