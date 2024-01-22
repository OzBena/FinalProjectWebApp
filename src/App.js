import { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Clock from './Components/Clock/Clock';
import ParticipationCode from './Components/ParticipationCode/ParticipationCode';
import Welcome from './Components/Welcome/Welcome';

function App() {

  const [userData, setUserData] = useState();
  const [stage, setStage] = useState(1);


  return (
    <div className="App">
      {stage === 1 ? <Welcome setStage={setStage} /> : userData === undefined ? <Form setUserData={setUserData} /> : <div><Clock /><ParticipationCode /></div>}
    </div>
  );
}

export default App;
