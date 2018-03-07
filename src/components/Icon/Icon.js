import React from 'react';
import PropTypes from 'prop-types';
import ArrowRight from '../../images/arrow-right.svg';
import ArrowLeft from '../../images/arrow-left.svg';
import CircleArrowRight from '../../images/circle-arrow-right.svg';
import Code from '../../images/code.svg';
import Grid from '../../images/grid.svg';
import Restart from '../../images/restart.svg';
import Share from '../../images/share.svg';
import Calendar from '../../images/calendar.svg';
import CreditCard from '../../images/credit-card.svg';

const Icon = ({ type, size }) => {
  switch (type) {
    case 'arrow-right':
      return (<ArrowRight width={size} height={size} />);
    case 'arrow-left':
      return (<ArrowLeft width={size} height={size} />);
    case 'circle-arrow-right':
      return (<CircleArrowRight width={size} height={size} />);
    case 'code':
      return (<Code width={size} height={size} />);
    case 'path':
      return (<Grid width={size} height={size} />);
    case 'restart':
      return (<Restart width={size} height={size} />);
    case 'share':
      return (<Share width={size} height={size} />);
    case 'calendar':
      return (<Calendar width={size} height={size} />);
    case 'credit-card':
      return (<CreditCard width={size} height={size} />);
    default:
      return (<Code width={size} height={size} />);
  }
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};


export default Icon;
