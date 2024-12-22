import React, { useState } from 'react';

const SearchableList = ({ data, placeholder, onMagnify }) => {
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
    if (!selectedItems.find((selectedItem) => selectedItem.name === item.name)) {
      setSelectedItems((prev) => [...prev, item]);
    }
  };

  const handleRemoveItem = (name) => {
    setSelectedItems((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder={placeholder || 'Search...'}
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>

      <div className="filter-container">
        {selectedItems.length > 0 && (
          <div className="selected-results">
            <h3>Selected Items:</h3>
            <ul>
              {selectedItems.map((item) => (
                <li key={item.name}>
                  {item.name}{' '}
                  <div className="result-action-buttons">
                    <div
                      className="action-button"
                      onClick={() => handleRemoveItem(item.name)}
                    >
                      <img
                        src="https://stardewvalleywiki.com/mediawiki/images/7/79/Garbage_Can.png"
                        alt="Delete"
                      />
                    </div>
                    <div
                      className="action-button magnify"
                      onClick={() => onMagnify(item)}
                    >
                      <img
                        src="https://stardewvalleywiki.com/mediawiki/images/5/5f/Magnifying_Glass.png"
                        alt="Magnify"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {searchTerm && filteredData.length > 0 && (
          <div className="filtered-results">
            <h3>Search Results:</h3>
            <ul>
              {filteredData.map((item) => (
                <li key={item.name}>
                  {item.name}{' '}
                  <div className="result-action-buttons">
                    <div
                      className="action-button"
                      onClick={() => handleSelectItem(item)}
                    >
                      <img
                        src="https://stardewvalleywiki.com/mediawiki/images/thumb/a/a9/Energy.png/32px-Energy.png"
                        alt="Select"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchableList;
