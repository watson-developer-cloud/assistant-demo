import React from 'react';
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

  render() {
    return (
      <div className="ibm-col-lg-4 ibm-col-sm-0">
        <DemoButton
          onClick={() => { this.onEnter(); }}
        />
        <PathSelectionOverlay
          isOverlayVisible={this.state.isOverlayVisible}
          onEnter={() => { this.onEnter(); }}
          onExit={() => { this.onExit(); }}
        />
      </div>
    );
  }
}

export default SelectionSidebar;
