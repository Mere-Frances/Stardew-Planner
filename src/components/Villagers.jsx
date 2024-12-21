import React from 'react';
import SearchableList from './Filter';
import Cooking from '/public/Cooking.json';

const Villagers = () => {
  return (
    <div>
      <h2>Villagers</h2>
      <SearchableList data={Cooking} placeholder="Search Villagers..." />
    </div>
  );
};

export default Villagers;
