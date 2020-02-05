import React from 'react';
import T from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.optionsList}>
      {Object.keys(options).map(option => (
        <li key={option} className={styles.optionsListItem}>
          <button
            name={option}
            className={styles.optionBtn}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: T.shape({
    good: T.number,
    neutral: T.number,
    bad: T.number,
  }).isRequired,
  onLeaveFeedback: T.func.isRequired,
};

export default FeedbackOptions;
