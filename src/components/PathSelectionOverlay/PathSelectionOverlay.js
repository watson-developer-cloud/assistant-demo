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
    <div className="ibm path-selection-overlay__container">
      <div className="path-selection-overlay">
        <div className="path-selection-overlay__card-group">
          <div className="path-selection-card__card-intro">
            <p className="ibm-type-c">In this demo, Watson Conversation has been trained
              on specific banking capabilities.
              Choose one of the 4 scenarios to explore.
            </p>
          </div>
          <PathSelectionCard
            pathNode={0}
            label="Path One"
            path="I\'d like to get a new credit card"
            onClick={(path) => { onPathSelect(path); }}
          />
          <PathSelectionCard
            pathNode={1}
            label="Path Two"
            path="This is the second path available"
            onClick={(path) => { onPathSelect(path); }}
          />
          <PathSelectionCard
            pathNode={2}
            label="Path Three"
            path="This is the third path available"
            onClick={(path) => { onPathSelect(path); }}
          />
          <PathSelectionCard
            pathNode={3}
            label="Path Four"
            path="This is the fourth path avilable"
            onClick={(path) => { onPathSelect(path); }}
          />
        </div>
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
