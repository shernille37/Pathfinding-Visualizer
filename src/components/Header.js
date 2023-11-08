import React from 'react';
import '../assets/header.css';

const Header = () => {
  return (
    <div className='header'>
      <h1>Pathfinding Visualizer</h1>

      <div className='start-button'>
        <button>
          <p>Visualize</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
