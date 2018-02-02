import React from 'react';
import PropTypes from 'prop-types';

const AgentCard = ({ time }) => (
  <div className="agent-card">
    <img src="#" alt="agent" className="agent-card__image" />
    <div className="agent-card__content">
      <p>Your chat history, started at {time}, has been transferred to Lisa Dumbell.</p>
    </div>
  </div>
);

AgentCard.propTypes = {
  time: PropTypes.string.isRequired,
};

export default AgentCard;
