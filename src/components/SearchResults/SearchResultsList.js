import React from 'react';
import PropTypes from 'prop-types';

const SearchResultsList = ({ res }) => (
  <div>
    {res.slice(0, 3).map(value => (
      <div id="search-div" className="search-item">
        <strong>{value.title}</strong>
        <br />
        {(value.body.length > 200) ? `${value.body.substring(0, 197)}...` : value.body}
        <br />
        <a href={`/search?id=${value.id}`} target="_blank" rel="noopener noreferrer">Full Document</a>
        <div id={value.id} hidden>{value.body}</div>
      </div>
    ))}
  </div>
);

SearchResultsList.propTypes = {
  res: PropTypes.object.isRequired,
};

export default SearchResultsList;
