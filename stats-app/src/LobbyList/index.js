import React from 'react'
import { Button, List } from 'semantic-ui-react'

export default function LobbyList(props) {
  const lobbies = [...props.lobbies].map((lobby) => {
    return(
      <List key={lobby._id} selection verticalAlign='middle'>
        <List.Item>
          <List.Content>
            <List.Header>{lobby.name} hosted by {lobby.owner}</List.Header>
            <Button
              onClick={() => props.lobbies.get(lobby._id)}>
              View
            </Button>
          </List.Content>
        </List.Item>
      </List>
    )
  })
  return(
    <List>
      {lobbies}
    </List>
  )
}
