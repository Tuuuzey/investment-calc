import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [ userInput, setUserInput ] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 100,
    duration: 10,
  });

  function handleInputChange(inputID, newValue) {
    setUserInput(prevInputs => {
      return {
        ...prevInputs, [inputID]: +newValue
      };
    });
  }

  if(userInput.duration <= 0) userInput.duration = 1;

  return (
    <div>
      <Header />
      <UserInput userInput={userInput} onChange={handleInputChange}/>
      <Results input={userInput} />
    </div>
  );
}

export default App
