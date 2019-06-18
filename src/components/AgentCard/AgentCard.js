import React from 'react';
import PropTypes from 'prop-types';
import LindaPic from '../../images/linda.png';

const AgentCard = ({ time }) => (
  <div className="image-card agent-card">
    <div
      className="image-card__image agent-card__image"
      style={{ backgroundImage: `url(${LindaPic})` }}
    >
      <div />
    </div>
    <div className="image-card__content agent-card__content">
      <p className="ibm-type-c">
        Your chat history, started at
        {time}
, has been transferred to Emma Banker.
      </p>
    </div>
  </div>
);

AgentCard.propTypes = {
  time: PropTypes.string.isRequired,
};

export default AgentCard;
