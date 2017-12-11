import React from 'react';
import PropTypes from 'prop-types';

const PathSelectionCard = ({ text, onClick }) => (
  <button
    className="path-selection-card"
    onClick={() => { onClick(); }}
  >
    <p>{text}</p>
  </button>
);

PathSelectionCard.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PathSelectionCard;
