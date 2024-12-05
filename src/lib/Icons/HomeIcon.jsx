import React from 'react';

import PropTypes from 'prop-types';

import { Icon } from './Icons';

export const HomeIcon = (props) => (
  <Icon name="home" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.1875L21.4501 10.275L21.0001 11.625H20.25V20.25H3.75005V11.625H3.00005L2.55005 10.275L12 3.1875ZM5.25005 10.125V18.75H18.75V10.125L12 5.0625L5.25005 10.125Z"
      fill={props.fill}
    />
  </Icon>
);

HomeIcon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
};
