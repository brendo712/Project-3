import React, { Component } from 'react'
import { Form, Button, Label, Dropdown } from 'semantic-ui-react'
import '../index.css'

export default class LoginRegisterForm extends Component {

  constructor() {
    super()

    this.state = {
      gamertag: '',
      platform: '',
      kpm: ''
    }
  }


handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleMount = async (event) => {
    event.preventDefault()
    const codkey = process.env.REACT_APP_API_KEY
    
    try {
      
      const response = await fetch(`https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/${this.state.gamertag}/${thiis.state.platform}`, {
        method: "GET",
        headers: {
            
            "x-rapidapi-key": codkey,
            "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com"
            
          }
         

          
      })
      
        const data = await response.json()
        console.log(data)
        
        this.setState({
          kpm: data.data
        })
    
      }
      catch(err) {
        console.log('Error in componentDidMount:')
        console.log(err)
      }
    }

handleSubmit = (event) => {
   event.preventDefault()
   console.log(`You are trying to  with the following credentials`)
   console.log(this.state);
 }

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
        
         // only show username field if they are registering
         // because our login process just uses email
      
        
         <React.Fragment>
           <Label>Gamertag:</Label>
           <Form.Input
             type="text"
             name="gamertag"
             placeholder="Player Gamertag"
             value={this.state.gamertag}
             onChange={event => this.setState({gamertag: event.target.value})}
           />
          </React.Fragment>
          <Label>Platform:</Label>
          <Form.Input>
          
            <Dropdown text='Platform'>
                <Dropdown.Menu>
                <Dropdown.Item text="psn">Volvo </Dropdown.Item>
                <Dropdown.Item text="battle">Saab </Dropdown.Item>
                <Dropdown.Item text="xbl">Fiat </Dropdown.Item>
                <Dropdown.Item text="steam">Audi </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            value={this.state.platform}
            onChange={event => this.setState({plateform: event.target.value})}
        </Form.Input>
          <Button type="Submit">
            
          </Button>
        </Form>
      </React.Fragment>
    )
  }
}