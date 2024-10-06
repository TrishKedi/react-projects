import { useState } from "react"
import Input from "./component/Input"
import Result from "./component/Result"
const initialInputValues = {
  initialInvestment: 1000,
  annualInvestment: 200,
  expectedReturn: 30,
  duration: 10,
}
function App() {
  const[inputValues, setInputValues] = useState(initialInputValues)

  function calculateResult(name, value){
    setInputValues(prevInputValues => {
      return {
        ...prevInputValues,
        [name]: +value
      }
    })

  }
  return (
    <>
      <Input  userInput={inputValues} onInputChange={calculateResult}/>
      <Result values={inputValues}/>
    </>
   
    
  )
}

export default App
