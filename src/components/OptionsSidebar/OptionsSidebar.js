import React from 'react';
import PropTypes from 'prop-types';
import JsonPane from '../JsonPane/JsonPane';
import DemoButton from '../DemoButton/DemoButton';
import DemoToggleButton from '../DemoToggleButton/DemoToggleButton';

class OptionsSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isJsonVisible: false,
    };
  }

  toggleJson() {
    this.setState({ isJsonVisible: !this.state.isJsonVisible });
  }

  render() {
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
              onClick={null}
            />
            <DemoButton
              icon="share"
              onClick={null}
            />
          </div>
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
};

export default OptionsSidebar;
