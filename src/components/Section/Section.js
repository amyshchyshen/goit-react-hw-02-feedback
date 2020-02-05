import React from 'react';
import T from 'prop-types';
import styles from './Section.module.css';

const Container = ({ title, children }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);

Container.propTypes = {
  title: T.string.isRequired,
  children: T.element.isRequired,
};

export default Container;
