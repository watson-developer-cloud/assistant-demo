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
      <div className="ibm-col-lg-4 ibm-col-md-2 ibm-col-sm-0 path-selection__container">
        <DemoButton
          icon="path"
          onClick={() => { this.onEnter(); }}
        />
        <PathSelectionOverlay
          isOverlayVisible={this.state.isOverlayVisible}
          onEnter={() => { this.onEnter(); }}
          onExit={() => { this.onExit(); }}
          onPathSelect={(path) => { this.onPathSelect(path); }}
        />
        <div className="path-selection__description">
          <p>{this.props.currentPath}/{this.props.maxPaths}</p>
          <p>This is where the path description is going to go.
            It is typically about two sentences long.
            Perhaps it will be three sentences, but who knows.
          </p>
        </div>
      </div>
    );
  }
}

SelectionSidebar.propTypes = {
  onPathSelect: PropTypes.func.isRequired,
  currentPath: PropTypes.number.isRequired,
  maxPaths: PropTypes.number.isRequired,
};

export default SelectionSidebar;
