import './App.css';
import Login from './screens/Login';
import Signup from './screens/Signup';
import LoginMessage from './components/LoginMessage';
import SignupMessage from './components/SignupMessage';
import { useState } from 'react';

function App() {
  const [screen,setScreen] = useState('login');

  return <>
    <div className='bg-dark vh-100'>
      <div className='container'>
      <div className='row align-content-center vh-100'>
        <div className='offset-md-3 col-md-6'>
          { (screen == 'login') ? <><Login/> <SignupMessage setScreen={setScreen}/></> : <><Signup/> <LoginMessage setScreen={setScreen}/></> }
        </div>
      </div>
    </div>
    </div>
  </>;
}

export default App;
