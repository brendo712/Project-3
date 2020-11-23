import React, { Component } from 'react'
import { Form, Button, Label, Dropdown, Modal } from 'semantic-ui-react'
import '../index.css'

export default class AddPlayerModal extends Component {

  constructor(props) {
    super(props)

    this.state = {
      gamertag: props.playerToAdd.gamertag,
      platform: props.playerToAdd.platform,
      kpm: props.playerToAdd.kpm
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
      
      const response = await fetch(`https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/${this.state.gamertag}/${this.state.platform}`, {
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
   this.props.updateLobby(this.state)
 }

  render() {
    return (
    
      <Modal open={true} closeIcon={true} onClose={this.props.closeModal}>
     
      <Modal.Content> 
        <Form onSubmit={this.handleSubmit}>
      
           <Form.Input
             type="text"
             name="gamertag"
             placeholder="Player Gamertag"
             value={this.state.gamertag}
             onChange={event => this.setState({gamertag: event.target.value})}
          />
          
          <Label>Platform:</Label>
          
          
            <Dropdown text='Platform' value={this.state.platform} onChange={event => this.setState({plateform: event.target.value})}>
                <Dropdown.Menu>
                <Dropdown.Item text="psn">Playstation Network </Dropdown.Item>
                <Dropdown.Item text="battle">BattleNet </Dropdown.Item>
                <Dropdown.Item text="xbl">Xbox</Dropdown.Item>
                <Dropdown.Item text="steam">Steam</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
         
          <Modal.Actions>
           <Button type="Submit">Add Players</Button> 
          </Modal.Actions>
          </Form>
     </Modal.Content>
     </Modal>
    )
  }
}