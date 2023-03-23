
import './Styles.css'
import Button from './components/Button.jsx'
import Input from './components/Input.jsx'
import { useState } from 'react'
import * as math  from 'mathjs'
function App() {
  const buttonColor = "#f2a33c"

  const clearButton = "#eb4034"
  const [text,setText] = useState("")
  const [result,setResult] = useState("")

  const addToText = (value)=>{
    
    setText((text)=>[...text,value+""])
  }

  const clearText = ()=>{
    setText("");
    setResult("");
  }

  const calculate = ()=>{
    var input = text.join("")
    setResult(math.evaluate(input))

  }

  return (

    <div className="App">
      <div className="calculator">
        {/* display-screen */}
        <Input Text={text} Result={result}/>
        
        {/* Rowa */}
        <div className="input-buttons">
            <div className="row">
              <Button handleClick={addToText} Symbol={7}/>
              <Button handleClick={addToText} Symbol={8}/>
              <Button handleClick={addToText} Symbol={9}/>
              <Button handleClick={addToText}  color={buttonColor} Symbol={'/'}/>
            </div>
            <div className="row">
              <Button handleClick={addToText} Symbol={4}/>
              <Button handleClick={addToText} Symbol={5}/>
              <Button handleClick={addToText} Symbol={6}/>
              <Button handleClick={addToText} color={buttonColor} Symbol={'*'}/>
            </div>
            <div className="row">
              <Button handleClick={addToText} Symbol={1}/>
              <Button handleClick={addToText} Symbol={2}/>
              <Button handleClick={addToText} Symbol={3}/>
              <Button handleClick={addToText} color={buttonColor} Symbol={'+'}/>
            </div>
            <div className="row">
              <Button handleClick={addToText} Symbol={0}/>
              <Button handleClick={addToText} Symbol={'.'}/>
              <Button handleClick={calculate} Symbol={'='}/>
              <Button handleClick={addToText} color={buttonColor} Symbol={'-'}/>
            </div>
            <div className="lastBtn">
                <Button handleClick={clearText} color={clearButton} btnType={"clearButton"} Symbol={"Clear"}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
