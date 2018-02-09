import React from 'react';
import PropTypes from 'prop-types';
import ccImageOne from '../../images/cc1.png';

const CreditCardOption = ({
  onUserInput,
  cardName,
  description,
  isSelected,
}) => {
  const isSelectedClass = (isSelected) ? 'image-card--selected credit-card-option--selected' : '';
  const classes = `credit-card-option image-card ${isSelectedClass}`;

  return (
    <button
      className={classes}
      onClick={() => { onUserInput(cardName); }}
    >
      <div
        className="image-card__image credit-card-option__image"
        style={{ backgroundImage: `url(${ccImageOne})` }}
      >
        <div />
      </div>
      <div className="image-card__content credit-card-option__content">
        <p className="ibm-type-b ibm-type-semibold">{cardName}</p>
        <p className="ibm-type-a">{description}</p>
        <p className="ibm-type-a credit-card-option__link">Learn More →</p>
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
