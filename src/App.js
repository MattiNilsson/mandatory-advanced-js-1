import React from 'react';
import io from 'socket.io-client';
import './App.css';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      login : false,
      username : "",
      response : false,
    }
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onClick(e) {
    const socket = io('http://3.120.96.16:3000/');
    socket.on("messages", data => this.setState({response : data}))
    console.log(this.state.username)
  }

  onChange(e){
    this.setState({username : e.target.value})
  }
  render(){
    console.log(this.state.response);
    let login;
    if(this.state.response === false){
      login = 
        <div>
          <h1>Login</h1>
          <input onChange={this.onChange} value={this.state.username}/>
          <button onClick={this.onClick}>Log in</button>
        </div>
    }else{
      let myLi = this.state.response.map((respond) => <li key={respond.id}>{respond.username + " : " + respond.content}</li>)
      login = 
        <div>
          <h1>Welcome</h1>
          <ul>{myLi}</ul>
        </div>;
    }
    return (
      <div className="App">
          {login}
      </div>
    );
  }
}

class Send extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <input />
    )
  }
}

export default App;
