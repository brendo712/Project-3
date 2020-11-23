import React, { Component } from 'react';
// import LobbyList from '../LobbyList';
import { Form, Button, Label, Segment } from 'semantic-ui-react'


    export default class NewLobbyForm extends Component {

        constructor(props) {
          super(props)
      
          this.state = {
            name: '',
            
          }
        }

  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
  
    }
    
    handleSubmit = (event) => {
      event.preventDefault()
  
      this.props.createLobby(this.state)
  
      this.setState({
        name: '',
      })
    }

    
  // fun tip: fragments! grouping elements without divs
  // https://reactjs.org/docs/fragments.html
    render() {
      console.log("render() in NewLobbyForm is running")
      return (
        <Segment>
        <h4> Add New Lobby:</h4>
        <Form onSubmit={this.handleSubmit}>
          <Label>Tournament Name:</Label>
          <Form.Input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter a name"
            onChange={this.handleChange}
          />
          <Button type="Submit">Create Lobby</Button>
        </Form>
      </Segment>
      )
    }
  }
  