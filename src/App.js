import { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Welcome from './Components/WelcomePage/Welcome';
import ThankYou from './Components/ThankYouPage/ThankYou';
import ReadyToWinPage from './Components/ReadyToWinPage/ReadyToWinPage';
import ContestsPage from './Components/ContestsPage/ContestsPage';


function App() {


  const [stage, setStage] = useState(1);

  const renderComponent = () => {
    switch (stage) {
      case 1:
        return <Welcome setStage={setStage} />;
      case 2:
        return <ReadyToWinPage setStage={setStage} />;
      case 3:
        return <ContestsPage setStage={setStage} />;
      case 4:
        return <Form setStage={setStage} />;
      case 5:
        return <ThankYou />
      default:
        return <div>Invalid stage</div>; 
    }
  };

  return <div className="App">{renderComponent()}</div>;
}

export default App;
