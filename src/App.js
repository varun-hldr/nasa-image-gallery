import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, getData] = useState([]);

  useEffect(() => {
    const today = new Date();
    const year = today.getUTCFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate() - 1;
    const date = `${year}-${month}-${day}`;
    if (!isLoaded) {
      callApi(date);
    }
  });

  const callApi = (date) => {
    const keY = "EhG1k6n5owkDLwymr8VLuyohnQbd4xYK3bUigawl";
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${keY}`)
      .then((res) => res.json())
      .then((result) => {
        getData(result);
        setIsLoaded(true);
      });
  };
  return (
    <div className="App">
      <Layout callApi={callApi} data={data} isLoaded={isLoaded} />
    </div>
  );
};

export default App;
