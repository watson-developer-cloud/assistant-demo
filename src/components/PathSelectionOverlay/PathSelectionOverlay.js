import React from 'react';
import { Modal } from 'watson-react-components';
import PropTypes from 'prop-types';
import PathSelectionCard from '../PathSelectionCard/PathSelectionCard';

const PathSelectionOverlay = ({
  isOverlayVisible,
  onEnter,
  onExit,
  onPathSelect,
}) => (
  <Modal
    isOpen={isOverlayVisible}
    onExit={() => { onExit(); }}
    onEnter={() => { onEnter(); }}
  >
    <div className="ibm-col-lg-8 path-selection-overlay">
      <p>In this demo, Watson Conversation has been trained on specific banking capabilities.
        Choose one of the 4 scenarios to explore.
      </p>
      <div className="path-selection-overlay__card-group">
        <PathSelectionCard
          pathNode={0}
          text="Path One"
          onClick={() => { onPathSelect(); }}
        />
        <PathSelectionCard
          pathNode={1}
          text="Path Two"
          onClick={() => { onPathSelect(); }}
        />
        <PathSelectionCard
          pathNode={2}
          text="Path Three"
          onClick={() => { onPathSelect(); }}
        />
        <PathSelectionCard
          pathNode={3}
          text="Path Four"
          onClick={() => { onPathSelect(); }}
        />
      </div>
    </div>
  </Modal>
);

PathSelectionOverlay.propTypes = {
  isOverlayVisible: PropTypes.bool.isRequired,
  onEnter: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
  onPathSelect: PropTypes.func.isRequired,
};

export default PathSelectionOverlay;
