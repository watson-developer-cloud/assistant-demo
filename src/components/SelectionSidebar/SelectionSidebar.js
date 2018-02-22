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
          paths={this.props.paths}
          onPathSelect={(path) => { this.onPathSelect(path); }}
        />
        <div className="path-selection__description">
          <p className="ibm-type-c duo-gray-50">
            {this.props.paths[this.props.currentPath - 1].description}
          </p>
          <p className="ibm-type-c">{this.props.currentPath}/{this.props.paths.length}</p>
        </div>
      </div>
    );
  }
}

SelectionSidebar.propTypes = {
  onPathSelect: PropTypes.func.isRequired,
  paths: PropTypes.array.isRequired,
  currentPath: PropTypes.number.isRequired,
};

export default SelectionSidebar;
