import React from 'react';
import { JsonLinkInline } from 'watson-react-components';
import PropTypes from 'prop-types';

const JsonPane = ({ json, isVisible }) => {
  const isHiddenClass = isVisible ? '' : 'json-pane--hidden';
  const jsonOverlayClasses = `json-pane ${isHiddenClass}`;
  const newjson = JSON.parse(json.replace('\\', ''));
  const jsonNew = newjson.result;

  return (
    <div className={jsonOverlayClasses}>
      <JsonLinkInline
        json={jsonNew}
        showJson={isVisible}
        onExit={null}
        onShow={null}
        description={<span />}
        lineNumbers
      />
    </div>
  );
};

JsonPane.propTypes = {
  json: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default JsonPane;
