import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const DemoToggleButton = ({
  isToggled,
  icon,
  onClick,
}) => {
  const toggleStyle = (isToggled) ? 'demo-toggle-button__toggled' : '';
  const buttonStyle = `demo-button demo-toggle-button ${toggleStyle}`;

  return (
    <button
      className={buttonStyle}
      onClick={() => { onClick(); }}
    >
      <Icon
        type={icon}
        size={24}
      />
    </button>
  );
};

DemoToggleButton.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DemoToggleButton;
