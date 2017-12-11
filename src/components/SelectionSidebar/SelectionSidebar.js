import React from 'react';
import { Modal } from 'watson-react-components';
import GenericButton from '../GenericButton/GenericButton';

class SelectionSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };
  }

  onExit() {
    this.setState({ modalVisible: false });
  }

  onEnter() {
    this.setState({ modalVisible: true });
  }

  render() {
    return (
      <div className="ibm-col-lg-4 ibm-col-sm-0">
        <GenericButton
          onClick={() => { this.onEnter(); }}
        />
        <Modal
          isOpen={this.state.modalVisible}
          onExit={() => { this.onExit(); }}
          onEnter={() => { this.onEnter(); }}
        >
          <div className="selection-sidebar__modal-content ibm-col-lg-8">
            <p>In this demo, Watson Conversation has been trained on specific banking capabilities. Choose one of the 4 scenarios to explore.</p>
          </div>
          </Modal>
      </div>
    );
  }
}

export default SelectionSidebar;
