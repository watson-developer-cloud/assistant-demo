import React from 'react';
import PropTypes from 'prop-types';
import Code from '../../images/code.svg';
import Grid from '../../images/grid.svg';
import Restart from '../../images/restart.svg';
import Share from '../../images/share.svg';

const Icon = ({ type, size }) => {
  switch (type) {
    case 'code':
      return (<Code width={size} height={size} />);
    case 'path':
      return (<Grid width={size} height={size} />);
    case 'restart':
      return (<Restart width={size} height={size} />);
    case 'share':
      return (<Share width={size} height={size} />);
    default:
      return (<Code width={size} height={size} />);
  }
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};


export default Icon;
