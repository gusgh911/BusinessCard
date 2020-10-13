import React from 'react';
import styles from './auth_header.module.css';

const AuthHeader = (props) => {

  return (
    <div className={styles.header}> 
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </div>
  )

};



export default AuthHeader;