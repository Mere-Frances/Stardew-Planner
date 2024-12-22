import React from 'react';
import SearchableList from './Filter';
import Materials from '/public/Minerals.json';

const Minerals = ({ onRemove, onMagnify }) => {
  return (
    <div>
      <div className="button-row">
        <div className="button delete-button" onClick={onRemove}>
          <i className="nes-icon close is-small"></i>
        </div>
      </div>
      <SearchableList
        data={Materials}
        placeholder="Search Minerals..."
        onMagnify={onMagnify}
      />
    </div>
  );
};

export default Minerals;
