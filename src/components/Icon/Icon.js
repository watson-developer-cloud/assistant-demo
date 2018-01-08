import React from 'react';
import PropTypes from 'prop-types';
import Code from '../../images/code.svg';

const Icon = ({ type, size }) => {
  switch (type) {
    case 'code':
      return (<Code width={size} height={size} />);
    default:
      return (<Code width={size} height={size} />);
  }
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};


export default Icon;
