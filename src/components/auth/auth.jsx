import React from 'react';
import AuthFooter from '../auth_footer/auth_footer';
import AuthHeader from '../auth_header/auth_header';
import styles from './auth.module.css';
import firebase from 'firebase';
import firebaseApp from './firebase';

const Auth = (props) => {

  const authService = (provider) => { 
      const authProvider = new firebase.auth[`${provider}AuthProvider`]();
       return firebaseApp.auth().signInWithPopup(authProvider);
  };
  
  const onLogin = event => {
    console.log(event.currentTarget.textContent);
    authService(event.currentTarget.textContent);
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <AuthHeader />
        <div className={styles.loginBox}>
          <h2 className="loginTitle">Login</h2>
          <button onClick={onLogin} className="Google">Google</button>
          <button onClick={onLogin} className="Github">Github</button>
        </div>
        <AuthFooter />
      </div>
      
    </section>
  )
  };

export default Auth;