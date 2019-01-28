import React, { Component } from 'react';

class NameTag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <textarea rows='2' class='pretty-border' text>
          {this.props.greeting + ", " + this.props.name + "!"}
        </textarea>
    );
  }
}

export default NameTag;