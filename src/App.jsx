import React, { useState } from "react";
import axios from "axios";
import Advice from "./Advice";

function App() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      // console.log(response.data.slip);
      setAdvice(response.data.slip);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Advice advice={advice}/>
      <button onClick={fetchAdvice}>Fetch</button>
    </div>
  );
}

export default App;
