import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }



  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.loginUser(this.state)

    this.setState({
      username: '',
      password: '',
    })
  }

  render()  {
    return (
      <Segment>
        <h4>Login:</h4>
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
          <Button type="Submit">Login</Button>
        </Form>
      </Segment>
    )
  }
}