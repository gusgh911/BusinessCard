import React from 'react';
import AuthFooter from '../auth_footer/auth_footer';
import AuthHeader from '../auth_header/auth_header';
import styles from './auth.module.css';


const Auth = (props) => {
      
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <AuthHeader />
        <div className={styles.loginBox}>
          <h2 className="loginTitle">Login</h2>
          <button className="google">Google</button>
          <button className="github">Github</button>
        </div>
        <AuthFooter />
      </div>
      
    </section>
  )
  };

export default Auth;