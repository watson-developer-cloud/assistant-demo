import React from 'react';
import { JsonLinkInline } from 'watson-react-components';
import PropTypes from 'prop-types';

const JsonSidebar = ({ json }) => {
  const showJson = true;
  return (
    <div className="ibm-col-lg-4 json-sidebar">
      <JsonLinkInline
        json={json}
        showJson={showJson}
        onExit={null}
        onShow={null}
        description={<p>Show JSON</p>}
      />
    </div>
  );
};

JsonSidebar.propTypes = {
  json: PropTypes.string.isRequired,
};

export default JsonSidebar;
