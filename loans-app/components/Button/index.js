import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={['text-xl', 'bg-yellow-600', 'text-white', "w-32", "h-18"].join(' ')}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
};
