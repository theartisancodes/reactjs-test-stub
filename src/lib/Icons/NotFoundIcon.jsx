import React from 'react';

import PropTypes from 'prop-types';

import { Icon } from './Icons';

export const NotFoundIcon = (props) => (
  <Icon viewBox="0 0 42 42" {...props}>
    <path
      id="secondary"
      d="M18,21a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1H9L5,7V20a1,1,0,0,0,1,1Z"
      style={{ fill: '#2ca9bc', strokeWidth: 2 }}
    ></path>
    <line
      id="primary"
      x1="5"
      y1="13"
      x2="5"
      y2="16"
      style={{
        fill: 'none',
        stroke: '#000000',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
      }}
    ></line>
    <path
      id="primary-2"
      data-name="primary"
      d="M10,21h8a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1H9L5,7V9"
      style={{
        fill: 'none',
        stroke: '#000000',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
      }}
    ></path>
    <line
      id="primary-upstroke"
      x1="5.05"
      y1="20.5"
      x2="4.95"
      y2="20.5"
      style={{
        fill: 'none',
        stroke: '#000000',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2.5,
      }}
    ></line>
  </Icon>
);

NotFoundIcon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
};
