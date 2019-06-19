import React from 'react';
import PropTypes from 'prop-types';

const BalanceCard = ({
  balance,
  minPay,
  recPay,
  accountId,
}) => {
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
      <div className="balance-card__header ibm-padding">
        <p className="ibm-type-c ibm-type-semibold">Remaining Statement Balance</p>
        <p className="ibm-type-c ibm-type-semibold">{formattedBalance}</p>
      </div>
      <div className="balance-card__content">
        <div className="balance-card__item">
          <p>
Account ending in
            {accountId}
          </p>
        </div>
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
  accountId: PropTypes.string.isRequired,
  minPay: PropTypes.number,
};

BalanceCard.defaultProps = {
  minPay: 0,
};

export default BalanceCard;
