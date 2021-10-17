import React, { useEffect, useState } from "react";
import { CharacterSheetPathfinder } from "./container/CharacterSheetPathfinder";
import CONFIG from "./config/envs.config";
import { getSheet } from "./shared/services/fetchData";

export const App = () => {
  const [err, setError] = useState(null);
  const [response, setResponse] = useState(null)
  const [dataArray, setDataArray] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      getSheet().then((data) => {
        setDataArray(data);
        setLoading(false);
      }),
    []
  );

  if (err) return "Error fetching data from API.";
  if (loading) return "Loading data from API.";

  return (
    <CharacterSheetPathfinder
      sheetData={dataArray}
      primaryData={{ data: true }}
    />
  );
};

export default App;
