import React, { useState } from "react";
import "./App.css";

import QrReader from "react-qr-scanner";

function App() {
  const [result, setResult] = useState();

  // console.log(result);

  return (
    <div>
      <QrReader
        onScan={(data) => {
          console.log(data);
        }}
        onError={(error) => console.log(error)}
      />
    </div>
  );
}

export default App;
