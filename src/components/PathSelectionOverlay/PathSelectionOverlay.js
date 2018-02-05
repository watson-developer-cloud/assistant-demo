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
    <div className="path-selection-overlay__container">
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
            label="Make an online payment easy and simple"
            path="startdemo1"
            onClick={(path) => { onPathSelect(path); }}
          />
          <PathSelectionCard
            pathNode={1}
            label="Teach your bot how to gather information"
            path="startdemo2"
            onClick={(path) => { onPathSelect(path); }}
          />
          <PathSelectionCard
            pathNode={2}
            label="Seamlessly integrate with a Live Agent"
            path="startdemo3"
            onClick={(path) => { onPathSelect(path); }}
          />
          <PathSelectionCard
            pathNode={3}
            label="Promote and suggest products from a portfolio"
            path="startdemo4"
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
