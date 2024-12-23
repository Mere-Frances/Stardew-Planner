import React from 'react';
import SearchableList from './Filter';
import Fish from '/public/Fish.json';

const Fishing = ({ onRemove, onMagnify }) => {
  return (
    <div>
      <div className="button-row">
        <div className="button delete-button" onClick={onRemove}>
          <i className="nes-icon close is-small"></i>
        </div>
      </div>
      <SearchableList
        data={Fish}
        placeholder="Search Fish..."
        onMagnify={onMagnify}
      />
    </div>
  );
};

export default Fishing;
