export default function UserInputs({userInput, onChange}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input type="number" id="initial-investment" 
              onChange={(event)=>onChange('initialInvestment', event.target.value)}
              value={userInput.initialInvestment}
              required/>
        </div>
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input type="number" id="annual-investment" 
              value={userInput.annualInvestment}
              onChange={(event)=>onChange('annualInvestment', event.target.value)}
              required/>
        </div>
      </div>
    <br />
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" id="expected-return"
              value={userInput.expectedReturn}
              onChange={(event)=>onChange('expectedReturn', event.target.value)}
              required/>
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" 
              value={userInput.duration}
              onChange={(event)=>onChange('duration', event.target.value)}
              required/>
        </div>
      </div>
    </div>
  );
}
