import React from 'react';
import { Modal } from 'watson-react-components';
import PropTypes from 'prop-types';

const DemoNotification = ({
  message,
  notificationLink,
  isVisible,
  onExit,
  onEnter,
}) => (
  <div className="demo-notification">
    <Modal
      isOpen={isVisible}
      onExit={() => { onExit(); }}
      onEnter={() => { onEnter(); }}
    >
      <div className="demo-notification__content">
        <p>{message}</p>
        <a href={notificationLink}>Click here</a>
      </div>
    </Modal>
  </div>
);

DemoNotification.propTypes = {
  message: PropTypes.string.isRequired,
  notificationLink: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  onExit: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
};

DemoNotification.defaultProps = {
  notificationLink: '#',
};

export default DemoNotification;
