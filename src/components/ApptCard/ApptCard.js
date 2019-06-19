import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const ApptCard = ({ zip, apptDate, apptTime }) => (
  <div className="appt-card chat-item">
    <div className="appt-card__header">
      <div className="appt-card__address">
        <p>Local Bank</p>
        <p>132 14th Ave.</p>
        <p>
Local Town
          {zip}
        </p>
      </div>
      <Icon type="calendar" size={24} />
    </div>
    <div className="appt-card__content">
      <p>{apptDate}</p>
      <p>{apptTime}</p>
      <p>With Emma Banker</p>
    </div>
  </div>
);

ApptCard.propTypes = {
  zip: PropTypes.number.isRequired,
  apptDate: PropTypes.string.isRequired,
  apptTime: PropTypes.string.isRequired,
};

export default ApptCard;
