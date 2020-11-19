import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'
import Login from '../Login'
import EditLobbyModal from '../EditLobbyModal'
import NewLobbyForm from '../NewLobbyForm'
import LobbyList from '../LobbyList'
import Lobby from '../Lobby'
import Register from '../Register'

export default class LobbyContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    console.log("componentDidMount() in LobbyContainer is running")
    // This will get the lobbys when the component is rendered
    this.getLobbys()
  }
// We will need to add the getLobbys function here
  getLobbys = async () => {
    try{

    } catch(err) {
      console.log("Error getting lobby data.", err)
    }
  }

// deleteLobby will go here. We will want to make it so that the creator is only able to delete
// createLobby
// editLobby
// updateLobby
// closeModal??? I think i missed this part of the lecture. I will rewatch unless one of you guys can tell me what it does

  render() {
    return (
      <React.Fragment>
        <h2>Tournaments</h2>
      </React.Fragment>
    )
  }
}
