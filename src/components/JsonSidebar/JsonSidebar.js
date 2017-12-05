import React from 'react';
import { JsonLinkInline } from 'watson-react-components';
import PropTypes from 'prop-types';

class JsonSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isJsonHidden: true,
    };
  }

  toggleJson() {
    this.setState({ isJsonHidden: !this.state.isJsonHidden });
  }

  render() {
    const isHiddenClass = this.state.isJsonHidden ? 'is-hidden json-overlay' : 'json-overlay';
    const buttonPositionClass = this.state.isJsonHidden ? 'json-toggle--right json-toggle' : 'json-toggle';

    return (
      <div className="ibm-col-lg-4 json-sidebar">
        <button
          className={buttonPositionClass}
          onClick={() => { this.toggleJson(); }}
        >JSON Button
        </button>
        <div className={isHiddenClass}>
          <JsonLinkInline
            json={this.props.json}
            showJson={this.state.isJsonHidden}
            onExit={null}
            onShow={null}
            description={<p>Show JSON</p>}
          />
        </div>
      </div>
    );
  }
}

JsonSidebar.propTypes = {
  json: PropTypes.string.isRequired,
};

export default JsonSidebar;
