import React from 'react';
import PropTypes from 'prop-types';

import MapBank from '../../images/map-bank.png';

function getIcon(url) {
  if (url.includes('map-bank.png')) {
    return MapBank;
  }
  return '';
}

const ImageOption = ({ url }) => <img src={getIcon(url)} width="300" alt={url} />;

ImageOption.propTypes = {
  url: PropTypes.object.isRequired,
};

export default ImageOption;
