import React, { Fragment } from "react";
import "../styles/AllStyles.css";

class SavedData extends React.Component {
        render() {
            return(
            <Fragment>
                <div id="result-box"><a target="_blank" href={this.props.url}>{this.props.title}</a> {this.props.date}</div>
            </Fragment>
            )
        }
}
export default SavedData;