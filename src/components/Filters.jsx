import React from 'react';
import { SearchIcon } from './Icons';

export default function Filters({ searchQuery, setSearchQuery }) {
  return (
    <section className="filters">
      <div className="filter-group">
        <h3>Search Posts</h3>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Type keyword here" 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-yellow">
            <SearchIcon />
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
