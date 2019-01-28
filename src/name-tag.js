import React, { Component } from 'react';

class NameTag extends Component {
  render() {
    return (
        <textarea readOnly={true} rows='2' className='pretty-border' value={this.props.nameTag} />
    );
  }
}

export default NameTag;
