import React from 'react';
import SearchableList from './Filter';
import Fish from '/public/Fish.json';

const Fishing = ({ onRemove }) => {
  return (
    <div>
      {/* Close Button */}
      <div className="button-row">
        <div className="button delete-button" onClick={onRemove}>
          <i className="nes-icon close is-small"></i>
        </div>
      </div>

      {/* Searchable List */}
      <h2>Fish Search</h2>
      <SearchableList data={Fish} placeholder="Search Fish..." />
    </div>
  );
};

export default Fishing;
