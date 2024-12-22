import React from 'react';
import SearchableList from './Filter';
import Recipes from '/public/Cooking.json';

const Cooking = ({ onRemove, onMagnify }) => {
  return (
    <div>
      <div className="button-row">
        <div className="button delete-button" onClick={onRemove}>
          <i className="nes-icon close is-small"></i>
        </div>
      </div>
      <SearchableList
        data={Recipes}
        placeholder="Search Recipes..."
        onMagnify={onMagnify}
      />
    </div>
  );
};

export default Cooking;
