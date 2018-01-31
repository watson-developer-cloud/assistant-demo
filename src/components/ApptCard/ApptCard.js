import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const ApptCard = ({ zip, apptDate, reason }) => (
  <div className="appt-card">
    <div className="appt-card__header">
      <div className="appt-card__address">
        <p>Xbank</p>
        <p>132 14th Ave.</p>
        <p>Local Town {zip}</p>
      </div>
      <Icon type="calendar" size={24} />
    </div>
    <div className="appt-card__content">
      <p>{apptDate}</p>
      <p>1:00pm - 2:00pm</p>
      <p>{reason}</p>
      <p>With Emma Eggplant</p>
    </div>
  </div>
);

ApptCard.propTypes = {
  zip: PropTypes.number.isRequired,
  apptDate: PropTypes.string.isRequired,
  reason: PropTypes.string.isRequired,
};

export default ApptCard;

