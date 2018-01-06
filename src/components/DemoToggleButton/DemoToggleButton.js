import React from 'react';
import PropTypes from 'prop-types';

const DemoToggleButton = ({ isToggled, onClick }) => {
  const toggleStyle = (isToggled) ? 'demo-toggle-button__toggled' : '';
  const buttonStyle = `demo-button demo-toggle-button ${toggleStyle}`;

  return (
    <button
      className={buttonStyle}
      onClick={() => { onClick(); }}
    />
  );
};

DemoToggleButton.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DemoToggleButton;
