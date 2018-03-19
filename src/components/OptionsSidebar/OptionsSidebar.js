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

  setValidPaths(currentPath) {
    const validPaths = {};

    if (this.props.paths[currentPath - 2] !== undefined) {
      validPaths.back = this.props.paths[currentPath - 2];
    }

    if (this.props.paths[currentPath] !== undefined) {
      validPaths.forward = this.props.paths[currentPath];
    }

    return validPaths;
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
    const currentPath = this.props.currentPath;
    const nextPath = this.props.paths[currentPath];
    const previousPath = this.props.paths[currentPath - 2];
    const validPaths = this.setValidPaths(currentPath);
    let backPath;
    let forwardPath;

    if (validPaths.back !== undefined) {
      backPath = (
        <DemoButton
          icon="arrow-left"
          onClick={() => { this.props.onPathSelect(previousPath); }}
        />
      );
    }

    if (validPaths.forward !== undefined) {
      forwardPath = (
        <DemoButton
          icon="arrow-right"
          onClick={() => { this.props.onPathSelect(nextPath); }}
        />
      );
    }

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
            <DemoButton
              icon="share"
              onClick={null}
            />
            {forwardPath}
            {backPath}
          </div>
          <DemoNotification
            message={this.props.notificationText}
            notificationLink="#"
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
};

export default OptionsSidebar;
