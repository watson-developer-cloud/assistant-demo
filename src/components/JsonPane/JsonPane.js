import React from 'react';
import { JsonLinkInline } from 'watson-react-components';
import PropTypes from 'prop-types';

const JsonPane = ({ json, isVisible }) => {
  const isHiddenClass = isVisible ? '' : 'json-sidebar__overlay--hidden';
  const jsonOverlayClasses = `json-sidebar__overlay ${isHiddenClass}`;

  return (
    <div className={jsonOverlayClasses}>
      <JsonLinkInline
        json={json}
        showJson={isVisible}
        onExit={null}
        onShow={null}
        description={<p>JSON</p>}
      />
    </div>
  );
};

JsonPane.propTypes = {
  json: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default JsonPane;
