import React from 'react'
import { Button, List } from 'semantic-ui-react'

export default function LobbyList(props) {
    // console.log(props)
  const lobbies = props.lobbies.map(lobby => {
    return(
      <List key={lobby._id} selection verticalAlign='middle'>
        <List.Item>
          <List.Content>
            <List.Header>{lobby.name}</List.Header>
        
          </List.Content>
        </List.Item>
      </List>
    )
  })
  return(
    <List.List>
      {lobbies}
    </List.List>
  )
}
