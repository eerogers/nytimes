import React, { Fragment } from "react";
import "../styles/AllStyles.css";
import axios from 'axios'

class Results extends React.Component {
    handleSave = (e,value) => {
        e.preventDefault()
        console.log(this.props.link)
        console.log(this.props.headline)
        console.log(this.props.date.slice(0,10))
        if (this.props.headline) {
              axios.post('/articles', {
                title: this.props.headline,
                date: this.props.date.slice(0,10),
                link: this.props.link
              })
             // .then(console.log(res))
               // .then(res => this.loadBooks())
                .catch(err => console.log(err));
            }
    }
        render() {
            return(
            <Fragment>
                <div id="result-box"><a target="_blank" href={this.props.link}>{this.props.headline}</a> {this.props.date.slice(0,10)}<button className="saveB" id={this.props.link} onClick={this.handleSave}>Save</button></div>
            </Fragment>
            )
        }
}
export default Results;