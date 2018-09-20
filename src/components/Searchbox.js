import React from 'react';
import '../components/Searchbox.css';

const Searchbox = ({searchfield, searchChange}) => {
  return (
    <div className="pa2">
      <input
        type='search'
        placeholder='Search Robots'
        className='input'
        onChange={searchChange}
      />
    </div>
  );
}

export default Searchbox;
