import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ label, onClick, disabled }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={['text-xl', disabled ? 'bg-gray-400' : 'bg-yellow-400', 'text-white', "w-32", "h-18"].join(' ')}
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
