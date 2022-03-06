import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'
import LoginForm from './components/LoginForm'


function App() {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
      height="100vh"
      projectID = "eb220581-5114-4b30-90de-da12fa4fdde3"
      userName = {localStorage.getItem('username')}
      userSecret = {localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=> 
      
      <ChatFeed {...chatAppProps} />
      
} />
  )}
export default App;
