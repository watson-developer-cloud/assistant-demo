import React from 'react';
import PropTypes from 'prop-types';

const PathSelectionCard = ({ label, path, onClick }) => (
  <button
    className="path-selection-card ibm-type-c"
    onClick={() => { onClick(path); }}
  >
    {label}
  </button>
);

PathSelectionCard.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default PathSelectionCard;
