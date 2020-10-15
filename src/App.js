import React from 'react';
import Weather from "./Weather";

import "./styles.css";

function App() {
  return (
    <div className="App">       
        <Weather defaultCity={"Rotterdam"} />
    </div>
  );
}

export default App;
