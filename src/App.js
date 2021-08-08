import React, { useEffect, useState } from "react";
import { CharacterSheetPathfinder } from "./pages/CharacterSheet";

export const App = ({ apiURL = "http://localhost:8080/pathfinder" }) => {
  const [err, setError] = useState(null);
  const [dataArray, setDataArray] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiURL)
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((data) => {
        setDataArray(data);
      })
      .catch((error) => {
        console.error("Error obtaining data from API: ", error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [apiURL]);

  if (err) return "Error fetching data from API.";
  if (loading) return "Loading data from API.";

  return <CharacterSheetPathfinder sheetData={dataArray} />;
};

export default App;
