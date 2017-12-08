import React from 'react';
import { JsonLinkInline } from 'watson-react-components';
import PropTypes from 'prop-types';

class OptionsSidebar extends React.Component {
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
    const isHiddenClass = this.state.isJsonHidden ? 'json-sidebar__overlay--hidden' : '';
    //    const isSelectedClass = this.state.isJsonHidden ? '' : 'json-sidebar__button--selected';

    // const jsonButtonClasses = `json-sidebar__button ${isSelectedClass}`;
    const jsonOverlayClasses = `json-sidebar__overlay ${isHiddenClass}`;

    return (
      <div className="ibm-col-lg-4 json-sidebar">
        <div className={jsonOverlayClasses}>
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

OptionsSidebar.propTypes = {
  json: PropTypes.string.isRequired,
};

export default OptionsSidebar;
