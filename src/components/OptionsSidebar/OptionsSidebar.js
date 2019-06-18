import React from 'react';
import PropTypes from 'prop-types';
import JsonPane from '../JsonPane/JsonPane';
import DemoButton from '../DemoButton/DemoButton';
import DemoToggleButton from '../DemoToggleButton/DemoToggleButton';
import DemoNotification from '../DemoNotification/DemoNotification';

class OptionsSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isJsonVisible: false,
      isNotificationVisible: false,
    };
  }

  componentWillUpdate(newProps) {
    if (newProps.notificationText !== this.props.notificationText) {
      this.updateNotificationVisibility(true);
    }
  }


  updateNotificationVisibility(status) {
    this.setState({ isNotificationVisible: status });
  }

  closeNotification() {
    this.setState({ isNotificationVisible: false });
  }

  openNotification() {
    this.setState({ isNotificationVisible: true });
  }

  toggleJson() {
    this.setState({ isJsonVisible: !this.state.isJsonVisible });
  }

  render() {
    const { currentPath } = this.props;
    return (
      <div className="ibm-col-lg-4 options-sidebar">
        <div className="options-sidebar-container">
          <div className="options-panel">
            <DemoToggleButton
              isToggled={this.state.isJsonVisible}
              icon="code"
              alt="json-button"
              onClick={() => { this.toggleJson(); }}
            />
            <DemoButton
              icon="restart"
              onClick={() => { this.props.onPathSelect(this.props.paths[currentPath - 1]); }}
            />
          </div>
          <DemoNotification
            message={this.props.notificationText}
            link={this.props.notificationLink}
            isVisible={this.state.isNotificationVisible}
            onEnter={() => { this.openNotification(); }}
            onExit={() => { this.closeNotification(); }}
          />
          <JsonPane
            json={this.props.json}
            isVisible={this.state.isJsonVisible}
          />
        </div>
      </div>
    );
  }
}

OptionsSidebar.propTypes = {
  json: PropTypes.string.isRequired,
  paths: PropTypes.array.isRequired,
  currentPath: PropTypes.number.isRequired,
  onPathSelect: PropTypes.func.isRequired,
  notificationText: PropTypes.string.isRequired,
  notificationLink: PropTypes.string,
};

OptionsSidebar.defaultProps = {
  notificationLink: null,
};

export default OptionsSidebar;
