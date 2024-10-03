import React, { useState } from "react";

const SelectUser = ({ items2 }) => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setQuery(value);

    const filtered = items2.filter((item2) =>
      item2.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item2, index) => (
          <li key={index}>{item2}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectUser;
