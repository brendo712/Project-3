import React, { Component } from 'react';
// import LobbyList from '../LobbyList';
import { Form, Button, Label } from 'semantic-ui-react'


    export default class NewLobbyForm extends Component {

        constructor(props) {
          super(props)
      
          this.state = {
            kpm: [],
            
          }
        }

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }    

  
    componentDidMount() {
        // get the dogs when this component is first rendered
        this.createUser()
      }
  
      createUser = async () => {
        const codkey = process.env.REACT_APP_API_KEY
        
        try {
          
          const response = await fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/beau%2311804/battle", {
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
      



            // body: JSON.stringify()
            
      

    
  // fun tip: fragments! grouping elements without divs
  // https://reactjs.org/docs/fragments.html
    render() {
      console.log("render() in NewLobbyForm is running")
      return (
        ""
      //   <LobbyList
      //   kpm={this.state.kpm}
      // />
       
      )
    }
  }
  