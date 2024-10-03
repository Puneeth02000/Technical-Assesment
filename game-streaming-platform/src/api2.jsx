import React, { useState, useEffect } from "react";


const UserList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl1 = "https://reqres.in/api/users?page=2";
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
    return <div>Error: {error.message} Try Agin</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <h2>Users BIO</h2>
      <pre>{JSON.stringify(data.api1, null, 2)}</pre>
      <h2>Select user</h2>
      <pre>{JSON.stringify(data.api2, null, 2)}</pre>
    
    </div>
  );
};

export default UserList;
