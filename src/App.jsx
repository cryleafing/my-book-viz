import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AuthorChart from './components/AuthorChart';
import bestsellers from './data/bestsellers.json';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Amazon Bestsellers 2009-2019</h1>
      <p>Total books in dataset: {bestsellers.length}</p>
      
      <h2>Top Bestselling Authors</h2>
      <AuthorChart />
    </div>
  );
}

export default App
