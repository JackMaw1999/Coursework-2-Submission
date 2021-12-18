import { useRef } from 'react';
import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './SignupForm.module.css';

function SignupForm(props) {

  return (
    <Card>
      <form className={classes.form}>
        <h1>Signup Form</h1>
        <div className={classes.control}>
          <label htmlFor='name'>Username</label>
          <input type='text' required id='username' />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>E-mail</label>
          <input type='text' required id='email' />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Password</label>
          <input type='password' required id='password' />
        </div>
        <div className={classes.terms}>
          <input className={classes.check} type='checkbox' required id='toc' />
          <label htmlFor='toc'>Accept our Terms and Conditions</label>
        </div>
        <div className={classes.actions}>
          <button className={classes.register}>Register</button>
        </div>
      </form>
    </Card>
  );
}

export default SignupForm;
