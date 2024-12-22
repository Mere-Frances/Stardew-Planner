import React from 'react'

const Inspector = ({ data }) => {
    return (
      <div>
        <h3>Item Details:</h3>
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value.toString()}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Inspector;
  