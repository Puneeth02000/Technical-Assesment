import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl1 = "https://api.restful-api.dev/objects";
    const apiUrl2 = "https://api.restful-api.dev/objects/6";


    Promise.all([
      fetch(apiUrl1).then((response) => response.json()),
      fetch(apiUrl2).then((response) => response.json()),
    ])
      .then(([data1, data2]) => {
        setData({ api1: data1, api2: data2 });
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } 

  return (
    <div>
      <h1>API Data</h1>
      <h2>List</h2>
      <pre>{JSON.stringify(data.api1, null, 2 )}</pre>
      <h2>Trending One</h2>
      <pre>{JSON.stringify(data.api2, null, 2)}</pre>
    </div>
  );
};

export default FetchData;
