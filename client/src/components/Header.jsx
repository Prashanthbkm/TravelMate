import React from 'react';

const Header = () => (
  <header className="bg-blue-500 text-white p-4">
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-semibold">TravelMate 🌍</h1>
      <input
        type="text"
        className="p-2 rounded-lg"
        placeholder="Search for a destination..."
      />
    </div>
  </header>
);

export default Header;
