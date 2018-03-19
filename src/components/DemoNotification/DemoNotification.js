import React from 'react';
import { Modal } from 'watson-react-components';
import PropTypes from 'prop-types';

const DemoNotification = ({
  message,
  isVisible,
  onExit,
  onEnter,
}) => {
  const visibleClasses = (isVisible) ? 'active' : '';
  const demoNotificationClasses = `demo-notification ${visibleClasses}`;

  return (
    <div className={demoNotificationClasses}>
      <Modal
        isOpen={isVisible}
        onExit={() => { onExit(); }}
        onEnter={() => { onEnter(); }}
      >
        <div className="demo-notification__content">
          <div className="demo-notification__notification">
            <p className="ibm-type-b">{message}</p>
          </div>
        </div>
      </Modal>
    </div>

  );
};

DemoNotification.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onExit: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
};

export default DemoNotification;
