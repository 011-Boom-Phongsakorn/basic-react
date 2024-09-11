import React, { Component } from "react";


export default class Card extends Component {
  render() {
    return (
      <div className="container">
        <div className="con">
          <div className="img">
            <img src={this.props.image} alt="" />
          </div>
          <div className="content">
            <h4>Name : {this.props.name}</h4>
            <h5>Section : 66/110</h5>
            <h5>Major : Software Engineer</h5>
          </div>
        </div>
      </div>
    );
  }
}
