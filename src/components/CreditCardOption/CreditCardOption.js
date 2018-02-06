import React from 'react';
import PropTypes from 'prop-types';
import ccImageOne from '../../images/cc1.png';

const CreditCardOption = ({
  onUserInput,
  cardName,
  description,
  isSelected,
}) => {
  const isSelectedClass = (isSelected) ? 'credit-card-option--selected' : '';
  const classes = `ibm-type-b credit-card-option ${isSelectedClass}`;

  return (
    <button
      className={classes}
      onClick={() => { onUserInput(cardName); }}
    >
      <div className="credit-card-option__image">
        <img src={ccImageOne} alt={cardName} />
      </div>
      <div className="credit-card-option__content">
        <h2>{cardName}</h2>
        <p>{description}</p>
        <p className="credit-card-option__link">Learn More →</p>
      </div>
    </button>
  );
};

CreditCardOption.propTypes = {
  cardName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onUserInput: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

CreditCardOption.defaultProps = {
  isSelected: false,
};

export default CreditCardOption;
