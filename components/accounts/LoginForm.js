import { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Card from '../ui/Card';
import classes from './LoginForm.module.css';

function LoginForm(props) {
  function showRegisterFormHandler(){
    router.push('/register');
  }
  return (
    <Card>
      <form className={classes.form}>
        <h1>Login Form</h1>
        <div className={classes.control}>
          <label htmlFor='name'>Username/E-mail</label>
          <input type='text' id='username' />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Password</label>
          <input type='password' id='password' />
        </div>
        <div className={classes.actions}>
          <button className={classes.login}>Login</button>
          <p>or</p>
          <Link href="/register">
          <a><button className={classes.login}>Register</button></a>
          </Link>
        </div>
      </form>
    </Card>
  );
}

export default LoginForm;
