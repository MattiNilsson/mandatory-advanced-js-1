import React from 'react';
//import io from 'socket.io-client';

class Chat extends React.Component {
  render(){
  let myLi = this.props.response.map((respond) => {
    if(respond.username === this.props.username){
      return <li key={respond.id}>
        <p className="username">{respond.username}</p>
        <p className="message">{respond.content}</p>
      </li>
    }else{
      return <li key={respond.id}>
        <p className="myuser">{respond.username}</p>
        <p className="message">{respond.content}</p>
      </li>
    }
  })
    return(
      <div className="overall">
        <h1>Welcome</h1>
        <div className="centerList"><ul className="messages">{myLi}</ul></div>
        <form onSubmit={this.props.onClickSend}>
          <input onChange={this.props.onChatInput} value={this.props.message}/>
          <button type="submit">Send</button>
        </form>
      </div>
    ) 
  }
}



export default Chat;
