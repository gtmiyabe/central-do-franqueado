import React from 'react';
import PropTypes from 'prop-types';

const Report = ({ element, verifyMultiples }) => (
  <div className="">
    { verifyMultiples(element) }
  </div>
);

Report.PropTypes = {
  verifyMultiples: PropTypes.func.isRequired,
  element: PropTypes.string.isRequired,
}

export default Report;
