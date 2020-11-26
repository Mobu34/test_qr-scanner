import React, { useState } from "react";
import "./App.css";

import QrReader from "react-qr-scanner";

function App() {
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const [change, setChange] = useState(false);

  const handleChange = (data) => {
    setResult(data);
    change(true);
  };

  return (
    <div>
      {change ? (
        <>
          <p>{`QR CODE SCANNÉ, il correspond à ${result}`}</p>
        </>
      ) : (
        <>
          <QrReader onScan={handleChange} onError={(err) => setError(err)} />
          <p>{`Résultat : ${result}`}</p>
          <p>{`Error : ${error}`}</p>
        </>
      )}
    </div>
  );
}

export default App;
