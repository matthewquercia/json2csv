import React, { useState } from 'react';
import "./App.css";

function App() {
  const [json, setJson] = useState("");
  const [csv, setCsv] = useState("");

  const convertJsonToCsv = () => {
    try {
      let obj = JSON.parse(json);
      let converted = "";
      let headers = Object.keys(obj[0]);
      converted += headers + "\n";
      for (let key in obj) {
        converted += Object.values(obj[key]) + "\n";
      }
      setCsv(converted);
    } catch (e) {
      console.log("Invalid JSON");
    }
  }

  const clearJsonCsvFields = () => {
    setJson("");
    setCsv("");
  }

  const prettifyJson = () => {
    try {
      let obj = JSON.parse(json);
      setJson(JSON.stringify(obj, undefined, 4));
    } catch (e) {
      console.log("Invalid JSON");
    }
  }

  return (
    <div className='center'>
      <h1>JSON 2 CSV</h1>
      <h3>JSON</h3>
      <button className="btn btn-primary me-2" onClick={() => convertJsonToCsv()}>Convert To CSV</button>
      <button className="btn btn-primary me-2" onClick={() => prettifyJson()}>Prettify</button>
      <button className="btn btn-primary me-2" onClick={() => clearJsonCsvFields()}>Clear JSON and CSV</button>
      <a href={"data:text/csv;charset=utf-8," + csv} download="file.csv">Download CSV</a>
      <br />
      <br />
      <textarea value={json} rows="10" cols="75" onChange={e => setJson(e.target.value)} />
      <h3>CSV</h3>
      <textarea defaultValue={csv} rows="10" cols="75" onChange={e => setCsv(e.target.value)} />
    </div>
  );
}

export default App;
