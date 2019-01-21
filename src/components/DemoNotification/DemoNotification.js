import React from 'react';
import { Modal } from 'watson-react-components';
import PropTypes from 'prop-types';

const DemoNotification = ({
  message,
  link,
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
          {
            (link)
              ? (
                <a
                  className="demo-notification__cta ibm-type-b"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here for more info
                </a>
              ) : null
          }
        </div>
      </Modal>
    </div>
  );
};

DemoNotification.propTypes = {
  message: PropTypes.string.isRequired,
  link: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  onExit: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
};

DemoNotification.defaultProps = {
  link: null,
};

export default DemoNotification;
