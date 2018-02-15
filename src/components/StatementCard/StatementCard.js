import React from 'react';
import PropTypes from 'prop-types';

const StatementCard = ({ startDate, endDate }) => (
  <div className="balance-card">
    <div className="balance-card__header">
      <h3>Statement Period:</h3>
      <h3>{startDate}-{endDate}</h3>
    </div>
    <div className="balance-card__content">
      <div className="balance-card__item">
        <p>Card ending -23300</p>
      </div>
      <div className="balance-card__item">
        <p>Balance</p>
        <p>$1,564.23</p>
      </div>
      <div className="balance-card__item">
        <p>Minimum Payment Due</p>
        <p>$90.00</p>
      </div>
      <div className="balance-card__item">
        <p>Payment due date</p>
        <p>10/16/17</p>
      </div>
    </div>
  </div>
);

StatementCard.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default StatementCard;
