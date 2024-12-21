import React, { useState } from 'react';

const SearchableList = ({ data, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
  };

  const filterData = (term) => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(results);
  };

  const handleSelectItem = (item) => {
    // Add item if not already selected
    if (!selectedItems.find((selectedItem) => selectedItem.name === item.name)) {
      setSelectedItems((prev) => [...prev, item]);
    }
  };

  const handleRemoveItem = (name) => {
    setSelectedItems((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder={placeholder || 'Search...'}
        value={searchTerm}
        onChange={handleInputChange}
      />

      {/* Selected Items */}
      {selectedItems.length > 0 && (
        <div>
          <h3>Selected Items:</h3>
          <ul>
            {selectedItems.map((item) => (
              <li key={item.name}>
                {item.name}{' '}
                <button onClick={() => handleRemoveItem(item.name)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Search Results */}
      {searchTerm && filteredData.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {filteredData.map((item) => (
              <li key={item.name}>
                {item.name}{' '}
                <button onClick={() => handleSelectItem(item)}>Select</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableList;
