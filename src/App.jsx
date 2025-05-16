import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

import { useState } from 'react';

function App() {

  const [ userInput, setUserInput ] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 6,
    duration: 6,
  });

  function handleChange(inputID, newValue) {
    setUserInput((prevInputs=> {
      return {
        ...prevInputs, [inputID]: newValue
      };
    }))
  }
  if(userInput.duration <= 0) userInput.duration = 1;

  return (
    <div>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      <Results input={userInput}/>
    </div>
  );
}

export default App
