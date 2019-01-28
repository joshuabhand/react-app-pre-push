import React, { Component } from 'react';
import NameTag from './name-tag.js'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {language: 'Hello', nameTags: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({...this.state, language: event.target.value});
  }

  handleTextChange(event) {
    this.setState({...this.state, text: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    var names = this.state.text.split('\n').filter(name => name.trim() !== '');
    var map = names.map(name => this.state.language + ", " + name + "!");

    this.setState({...this.state, nameTags: map});
  }

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <textarea rows='4' value={this.state.text} onChange={this.handleTextChange} />
            <br></br>
            <label>
              Choose a language:
              <select value={this.state.language} onChange={this.handleChange}>
                <option value="Hello">English</option>
                <option value="Hola">Spanish</option>
                <option value="Bonjour">French</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>

          {this.state.nameTags.map(function(name, index) {
                return <div key={index}>
                    <NameTag nameTag={name} />
                    <br></br>
                    </div>;
           })}
      </div>
    );
  }
}

export default Form;
