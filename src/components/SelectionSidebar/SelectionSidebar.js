import React from 'react';
import PropTypes from 'prop-types';
import DemoButton from '../DemoButton/DemoButton';
import PathSelectionOverlay from '../PathSelectionOverlay/PathSelectionOverlay';

class SelectionSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOverlayVisible: false,
    };
  }

  onExit() {
    this.setState({ isOverlayVisible: false });
  }

  onEnter() {
    this.setState({ isOverlayVisible: true });
  }

  onPathSelect(path) {
    this.props.onPathSelect(path);
    this.onExit();
  }

  render() {
    return (
      <div className="ibm-col-lg-4 ibm-col-md-2 ibm-col-sm-0">
        <DemoButton
          onClick={() => { this.onEnter(); }}
        />
        <PathSelectionOverlay
          isOverlayVisible={this.state.isOverlayVisible}
          onEnter={() => { this.onEnter(); }}
          onExit={() => { this.onExit(); }}
          onPathSelect={(path) => { this.onPathSelect(path); }}
        />
      </div>
    );
  }
}

SelectionSidebar.propTypes = {
  onPathSelect: PropTypes.func.isRequired,
};

export default SelectionSidebar;
