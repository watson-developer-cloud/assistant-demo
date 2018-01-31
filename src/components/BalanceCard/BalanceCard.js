import React from 'react';
import PropTypes from 'prop-types';

const BalanceCard = ({ balance, minPay, recPay }) => {
  // generate currency formatter
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  // format props in USD currency style
  const formattedBalance = currencyFormatter.format(balance);
  const formattedMinPayment = currencyFormatter.format(minPay);
  const formattedRecPayment = currencyFormatter.format(recPay);

  return (
    <div className="balance-card">
      <div className="balance-card__header">
        <h3>Remaining Statement Balance</h3>
        <h3>{formattedBalance}</h3>
      </div>
      <div className="balance-card__content">
        <div className="balance-card__item">
          <p>Minimum payment due</p>
          <p>{formattedMinPayment}</p>
        </div>
        <div className="balance-card__item">
          <p>Recent payments</p>
          <p>{formattedRecPayment}</p>
        </div>
      </div>
    </div>

  );
};

BalanceCard.propTypes = {
  balance: PropTypes.number.isRequired,
  recPay: PropTypes.number.isRequired,
  minPay: PropTypes.number,
};

BalanceCard.defaultProps = {
  minPay: 0,
};

export default BalanceCard;
