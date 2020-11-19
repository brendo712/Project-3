import './App.css';
import Login from './Login';
import Register from './Register';





// one page called Login -> index.js
// login or sign up functions. 
// all info in state that user should have
// if call is successful update state with data
// pass both functions into js file. both login and register in form
// if this.signup = false bring up sign up page 
// 

function App() {
  return (
    
<div className="App">
    
    <Login />
    <Register />
    
    </div>


  );
}

export default App;
