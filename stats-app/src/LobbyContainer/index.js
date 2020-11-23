import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

// import EditLobbyModal from '../EditLobbyModal'
// import NewLobbyForm from '../NewLobbyForm'
import LobbyList from '../LobbyList'
// import Lobby from '../Lobby'

// console.log(process.env.NODE_ENV)
// let baseUrl = ''

// if (process.env.NODE_ENV === 'development') {
//   baseUrl = 'http://localhost:3003'
// } else {
//   baseUrl = 'heroku url here'
// }

// console.log('current base URL:', baseUrl)

export default class LobbyContainer extends Component {



  constructor(props) {
    super(props)
    this.state = {
      lobbies: [],
    }
  }
  componentDidMount() {
    console.log("componentDidMount() in LobbyContainer is running")
    // This will get the lobbys when the component is rendered
    this.getLobbies()
    console.log(this.getLobbies());
  }
// We will need to add the getLobbys function here
  getLobbies = async () => {
    try{
      const url = process.env.REACT_APP_API_URL + "/lobbies/"
      const lobbiesResponse = await fetch(url)
      const lobbiesJson = await lobbiesResponse.json()

      this.setState({
        lobbies:lobbiesJson.data

      })

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
        <LobbyList
        lobbies = {this.state.lobbies}/>

      </React.Fragment>
    )
  }
}
