import React from 'react';
import T from 'prop-types';
import styles from './Statistic.module.css';

const Statistic = ({ label, value }) => {
  return (
    <p>
      <span className={styles.statName}>{label}:</span>{' '}
      <span className={styles.statValue}>{value}</span>
    </p>
  );
};

Statistic.defaultProps = {
  value: 0,
};

Statistic.propTypes = {
  label: T.string.isRequired,
  value: T.oneOfType([T.string, T.number]),
};

export default Statistic;
