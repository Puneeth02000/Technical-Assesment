import React, { useState, useEffect } from "react";
import axios from "axios";

const UserSelector = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://apimeme.com/?ref=apilist.fun"); 
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleCheckboxChange = (userId) => {
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.includes(userId)
        ? prevSelectedUsers.filter((id) => id !== userId)
        : [...prevSelectedUsers, userId]
    );
  };

  return (
    <div>
      <h1>Select Users</h1>
      {users.length === 0 ? (
        <p>Users list Loading</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleCheckboxChange(user.id)}
                />
                {user.name}
              </label>
            </li>
          ))}
        </ul>
      )}
      <div>
        <h2>Selected Users:</h2>
        <ul>
          {users
            .filter((user) => selectedUsers.includes(user.id))
            .map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default UserSelector;
