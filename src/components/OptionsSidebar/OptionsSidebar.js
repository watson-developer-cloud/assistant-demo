import React from 'react';
import PropTypes from 'prop-types';
import OptionsPanel from '../OptionsPanel/OptionsPanel';
import JsonPane from '../JsonPane/JsonPane';

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
    //    const isSelectedClass = this.state.isJsonVisible ? '' : 'json-sidebar__button--selected';

    // const jsonButtonClasses = `json-sidebar__button ${isSelectedClass}`;

    return (
      <div className="ibm-col-lg-4 json-sidebar">
        <OptionsPanel
          toggleJson={() => { this.toggleJson(); }}
        />
        <JsonPane
          json={this.props.json}
          isVisible={this.state.isJsonVisible}
        />
      </div>
    );
  }
}

OptionsSidebar.propTypes = {
  json: PropTypes.string.isRequired,
};

export default OptionsSidebar;
