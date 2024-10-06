export default function Input({children, name, onInputChange, userInput}){
    function handleChange(name, value){
       

        onInputChange(name, value)

    }
    return(
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>initial Investment</label>
                <input type="number" name="initialInvestment" value={userInput.initialInvestment} onChange={(event) => handleChange("initialInvestment", event.target.value)} />
            </p>
            <p>
                <label>annual Investment</label>
                <input type="number" name="annualInvestment" value={userInput.annualInvestment}  onChange={(event) => handleChange("annualInvestment", event.target.value)} />
            </p>
            <p>
                <label>expected Return</label>
                <input type="number" name="expectedReturn" value={userInput.expectedReturn}  onChange={(event) => handleChange("expectedReturn", event.target.value)} />
            </p>
            <p>
                <label>duration</label>
                <input type="number" name="duration" value={userInput.duration}  onChange={(event) => handleChange("duration", event.target.value)} />
            </p>
        </div>
    </section>
 
    );
}