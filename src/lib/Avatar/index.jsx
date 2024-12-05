import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Avatar = ({
  altText = '',
  className = '',
  height = 32,
  imgUrl = '',
  onClick = () => undefined,
  width = 32,
  defaultText,
}) => {
  const [failedToLoadImg, setFailedToLoadImg] = useState(false);

  useEffect(() => {
    if (imgUrl) setFailedToLoadImg(false);
  }, [imgUrl]);

  const textFirstChar = String(defaultText || altText).toUpperCase()[0];

  return imgUrl && !failedToLoadImg ? (
    <img
      alt={altText || `Avatar for ${defaultText}`}
      className={`${styles.avatar} ${className}`}
      onClick={onClick}
      onError={() => setFailedToLoadImg(true)}
      src={imgUrl}
      style={{ height, width }}
    />
  ) : (
    <div
      className={`${styles.avatarPlaceholder} ${className}`}
      onClick={onClick}
      style={{ width, height }}
    >
      <span className={styles.avatarText} style={{ fontSize: width / 2 }}>
        {textFirstChar || '-'}
      </span>
    </div>
  );
};

Avatar.propTypes = {
  altText: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.number,
  imgUrl: PropTypes.string,
  width: PropTypes.number,
  onClick: PropTypes.func,
  defaultText: PropTypes.string,
};

export default Avatar;
