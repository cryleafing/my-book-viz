import { useState } from 'react'
import AuthorChart from './components/AuthorChart';
import bestsellers from './data/bestsellers.json';
import GenrePieChart from './components/GenrePieChart';
import './App.css'

function App() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  
  const filteredBestsellers = selectedGenre === 'All'
    ? bestsellers
    : bestsellers.filter(book => book.Genre === selectedGenre);

  return (
    <div className="App"> {/* one main container to rule them all */}
      <h1>Amazon Bestsellers 2009-2019</h1>
      
      {/* filter UI at the top */}
      <div className="controls">
        <label htmlFor="genre-select">Filter by Genre: </label>
        <select
          id="genre-select"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="All">All Genres</option>
          <option value="Fiction">Fiction</option>
          <option value="Non Fiction">Non Fiction</option>
        </select>
      </div>

      <p>Showing <strong>{filteredBestsellers.length}</strong> books (Total: {bestsellers.length})</p>

      {/* charts side-by-side */}
      <div className="charts-container" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2>Genre Distribution</h2>
          <GenrePieChart data={filteredBestsellers} />
        </div>

        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2>Top Bestselling Authors</h2>
          <AuthorChart data={filteredBestsellers} />
        </div>
      </div>
    </div>
  );
}

export default App;