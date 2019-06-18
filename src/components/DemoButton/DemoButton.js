import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const DemoButton = ({ icon, onClick }) => (
  <button
    type="button"
    className="demo-button"
    onClick={() => {
      onClick();
    }}
  >
    <Icon type={icon} size={20} />
  </button>
);

DemoButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DemoButton;
