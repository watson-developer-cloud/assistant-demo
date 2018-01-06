import React from 'react';
import { Modal } from 'watson-react-components';
import PropTypes from 'prop-types';

const GenericNotification = ({
  message, isVisible, onExit, onEnter,
}) => (
  <div className="generic-notification">
    <Modal
      isOpen={isVisible}
      onExit={() => { onExit(); }}
      onEnter={() => { onEnter(); }}
    >
      <p>{message}</p>
    </Modal>
  </div>
);

GenericNotification.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onExit: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
};

export default GenericNotification;
