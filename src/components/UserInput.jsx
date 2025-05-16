export default function UserInputs({ onChange, userInput }) {


  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input type="number" id="initial-investment" value={userInput.initialInvestment} onChange={(event)=>onChange( 'initialInvestment', Number(event.target.value)
 )}/>
        </div>
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input type="number" id="annual-investment" value={userInput.annualInvestment} onChange={(event)=>onChange( 'annualInvestment', Number(event.target.value)
 )}/>
        </div>
      </div>
    <br />
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" id="expected-return" value={userInput.expectedReturn} onChange={(event)=>onChange( 'expectedReturn', Number(event.target.value)
 )}/>
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" value={userInput.duration} onChange={(event)=>onChange( 'duration', Number(event.target.value)
 )}/>
        </div>
      </div>
    </div>
  );
}
