import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/guidelines'>Guidelines</Link>
          </li>
          <li>
            <Link href='/winners'>Winners</Link>
          </li>
          <li>
            <Link href='/judges'>Judges</Link>
          </li>
          <li className={classes.login}>
            <Link href='/login'>Login/Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
