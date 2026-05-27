import { useState } from 'react';

import Header from './compnents/Header.jsx';
import UserInput from './compnents/UserInput.jsx';
import Results from './compnents/Results.jsx';

function App() {                           
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

   function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUsrInput) => {
      return {
        ...prevUsrInput,
        [inputIdentifier]: +newValue,
      };
    });
  }


  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
    {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
