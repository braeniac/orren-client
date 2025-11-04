import "./App.css"; 
import { useState } from "react";

function App() {

  const [input, setInput] = useState(""); 
  
  return(
    <div className="App">
      <input 
        name="myInput"
        value={input}
        onChange={(e) => {
          setInput(e.target.value); 
        }} 
      />
      <p>{input}</p>
    </div>  
  )
}

export default App;
