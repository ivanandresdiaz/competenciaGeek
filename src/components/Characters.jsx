import React from 'react';

const Characters = () => {
  const getCharacters = async () => {
    const url = 'https://rickandmortyapi.com/api/character/';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
  };
  getCharacters();
  return (
    <div>
      Hello React
    </div>
  );
};

export default Characters;
