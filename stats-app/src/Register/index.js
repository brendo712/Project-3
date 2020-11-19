import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }



  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.createUser(this.state)

    this.setState({
      username: '',
      password: '',
      email: ''
    })
  }

  render()  {
    return (
      <Segment>
        <h4> Add new user:</h4>
        <Form onSubmit={this.handleSubmit}>
          <Label>UserName:</Label>
          <Form.Input
            type="text"
            name="username"
            value={this.state.username}
            placeholder="username"
            onChange={this.handleChange}
          />
          <Label>Password:</Label>
          <Form.Input
            type="text"
            name="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.handleChange}
          />
          <Label>email:</Label>
          <Form.Input
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Enter your email"
            onChange={this.handleChange}
          />
          <Button type="Submit">Create User</Button>
        </Form>
      </Segment>
    )
  }
}