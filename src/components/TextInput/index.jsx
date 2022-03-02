import P from 'prop-types';
import React from 'react';

import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      type="search"
      value={searchValue}
      onChange={handleChange}
      placeholder="Escreve alguma coisa ai"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
