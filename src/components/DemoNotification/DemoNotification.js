import React from 'react';
import { Modal } from 'watson-react-components';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

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
        <div className="demo-notification__notification">
          <p className="ibm-type-b">{message}</p>
        </div>
        <a href={notificationLink}>
          <div className="demo-notification__cta">
            <p className="ibm-type-b">Click here</p>

            <span>
              <Icon type="arrow-right" size={13} />
            </span>
          </div>
        </a>
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