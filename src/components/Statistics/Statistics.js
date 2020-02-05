import React from 'react';
import T from 'prop-types';
import Statistic from './Statistic';
import Notification from './Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <Notification message="No feedback given" />;
  }
  return (
    <ul className={styles.optionsList}>
      <li>
        <Statistic label="Good" value={good} />
      </li>
      <li>
        <Statistic label="Neutral" value={neutral} />
      </li>
      <li>
        <Statistic label="Bad" value={bad} />
      </li>
      <li>
        <Statistic label="Total" value={total} />
      </li>
      <li>
        <Statistic label="Positive feedback" value={positivePercentage} />
      </li>
    </ul>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: '0%',
};

Statistics.propTypes = {
  good: T.number,
  neutral: T.number,
  bad: T.number,
  total: T.number,
  positivePercentage: T.string,
};

export default Statistics;
