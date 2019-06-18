import React from 'react';
import { Modal } from 'watson-react-components';
import PropTypes from 'prop-types';
import PathSelectionCard from '../PathSelectionCard/PathSelectionCard';

const PathSelectionOverlay = ({
  isOverlayVisible,
  onEnter,
  onExit,
  paths,
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
            <p className="ibm-type-c">
In this demo, Watson Assistant has been trained
              on specific banking capabilities.
              Choose one of the
              {paths.length}
              {' '}
scenarios to explore.
            </p>
          </div>
          {paths.map(path => (
            <PathSelectionCard
              key={path.id}
              pathNode={path.id}
              label={path.label}
              path={path.path}
              onClick={() => { onPathSelect(path); }}
            />
          ))}
        </div>
      </div>
    </div>
  </Modal>
);

PathSelectionOverlay.propTypes = {
  isOverlayVisible: PropTypes.bool.isRequired,
  onEnter: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
  paths: PropTypes.array.isRequired,
  onPathSelect: PropTypes.func.isRequired,
};

export default PathSelectionOverlay;
