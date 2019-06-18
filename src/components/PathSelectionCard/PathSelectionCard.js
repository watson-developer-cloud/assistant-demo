import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const PathSelectionCard = ({ label, path, onClick }) => (
  <button
    type="button"
    className="path-selection-card ibm-type-c"
    onClick={() => {
      onClick(path);
    }}
  >
    <p className="ibm-type-c">{label}</p>
    <Icon type="circle-arrow-right" size={32} />
  </button>
);

PathSelectionCard.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default PathSelectionCard;
