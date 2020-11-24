import React, { Component } from 'react';
// import LobbyList from '../LobbyList';
import { Form, Button, Label, Segment, Image} from 'semantic-ui-react'


    export default class NewLobbyForm extends Component {

        constructor(props) {
          super(props)

          this.state = {
            name: '',
            owner: props.username,
            size: 0,
            players: [],
            prize: 0
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
        <div className="formdiv">
        <h4> Add New Lobby:</h4>
        
        <Form inverted relaxed onSubmit={this.handleSubmit}>
        <Form.Group inline widths='equal'>  <label><h5>Tournament Name:</h5></label>
          <Form.Input
            size="mini"
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter a name"
            onChange={this.handleChange}
          />
          <label><h5>Tournament Size: </h5></label>
          <Form.Input
            size="mini"
            type="text"
            name="size"
            value={this.state.size}
            placeholder="How many players?"
            onChange={this.handleChange}
          />
          </Form.Group>
          
          <label><h3>Tournament Prize:</h3></label>
          <Form.Input
            type="text"
            name="prize"
            value={this.state.prize}
            placeholder="Total Winnings"
            onChange={this.handleChange}
          />
          <Button type="Submit">Create Lobby</Button>
        </Form>
     </div>
      )
    }
  }
