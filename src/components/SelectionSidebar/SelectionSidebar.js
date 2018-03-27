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

  setValidPaths(currentPath) {
    const validPaths = {};

    if (this.props.paths[currentPath - 2] !== undefined) {
      validPaths.back = this.props.paths[currentPath - 2];
    } else {
      validPaths.back = this.props.paths[this.props.paths.length - 1];
    }

    if (this.props.paths[currentPath] !== undefined) {
      validPaths.forward = this.props.paths[currentPath];
    } else {
      validPaths.forward = this.props.paths[0];
    }

    return validPaths;
  }

  render() {
    const currentPath = this.props.currentPath;
    const validPaths = this.setValidPaths(currentPath);

    return (
      <div className="ibm-col-lg-4 ibm-col-md-2 ibm-col-sm-0 path-selection__container">
        <div className="path-selection__path-header">
          <DemoButton
            icon="path"
            onClick={() => { this.onEnter(); }}
          />
          <p className="ibm-type-a">See all features</p>
        </div>
        <PathSelectionOverlay
          isOverlayVisible={this.state.isOverlayVisible}
          onEnter={() => { this.onEnter(); }}
          onExit={() => { this.onExit(); }}
          paths={this.props.paths}
          onPathSelect={(path) => { this.onPathSelect(path); }}
        />
        <div className="path-selection__description">
          <p className="ibm-type-c duo-gray-20">
            {this.props.paths[this.props.currentPath - 1].label}
          </p>
          <p className="ibm-type-c duo-gray-50">
            {this.props.paths[this.props.currentPath - 1].description}
          </p>
          <p className="ibm-type-c">{this.props.currentPath}/{this.props.paths.length}</p>
          <div className="path-selection__nav-buttons">
            <DemoButton
              icon="arrow-left"
              onClick={() => { this.props.onPathSelect(validPaths.back); }}
            />
            <DemoButton
              icon="arrow-right"
              onClick={() => { this.props.onPathSelect(validPaths.forward); }}
            />
          </div>
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
