import { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Clock from './Components/Clock/Clock';
import ParticipationCode from './Components/ParticipationCode/ParticipationCode';

function App() {

  const [userData, setUserData] = useState();


  return (
    <div className="App">
      {userData === undefined ? <Form setUserData={setUserData} /> : <div><Clock /><ParticipationCode /></div>}

    </div>
  );
}

export default App;
