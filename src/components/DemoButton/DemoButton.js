import React from 'react';
import PropTypes from 'prop-types';

const DemoButton = ({ onClick }) => (
  <button
    className="demo-button"
    onClick={() => { onClick(); }}
  />
);

DemoButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DemoButton;
