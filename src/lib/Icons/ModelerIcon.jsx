import React from 'react';

import PropTypes from 'prop-types';

import { Icon } from './Icons';

export const ModelerIcon = (props) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path d="M10,10H2V2h8ZM4,8H8V4H4Z" />
    <path d="M30,30H22V22h8Zm-6-2h4V24H24Z" />
    <path d="M20,27H8A6,6,0,0,1,8,15v2a4,4,0,0,0,0,8H20Z" />
    <path d="M24,17V15a4,4,0,0,0,0-8H12V5H24a6,6,0,0,1,0,12Z" />
    <path d="M19,11H13l-3,4,6,6,6-6Z" />
  </Icon>
);

ModelerIcon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
};
