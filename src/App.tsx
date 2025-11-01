import Card from "./components/Card";

import "./App.css";
import { generatePDF } from "./utils/pdf";
import './App.css'

function App() {

  return (
    <>
      <h1>Generate a personal thank you card</h1>
       <Card />
        <button className="button" onClick={() => generatePDF("card-display")}>
          Download
        </button> 
    </>
  )
}

export default App
