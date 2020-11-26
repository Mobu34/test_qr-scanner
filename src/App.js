import React, { useState } from "react";
import "./App.css";

import QrReader from "react-qr-scanner";

function App() {
  const [result, setResult] = useState();
  const [error, setError] = useState();

  // console.log(result);

  return (
    <div>
      <QrReader
        onScan={(data) => {
          setResult(data);
        }}
        onError={(err) => setError(err)}
      />
      <p>{`Résultat : ${result}`}</p>
      <p>{`Error : ${error}`}</p>
    </div>
  );
}

export default App;
