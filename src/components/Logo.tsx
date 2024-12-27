import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <h1>
      <Link to='/'>
        <img
          className='mobile:hidden block'
          src='/img/logo/logo.svg'
          alt='Learnin Board'
        />
        <img
          className='mobile:block hidden'
          src='/img/logo/Header_Logo.svg'
          alt='Learnin Board'
        />
      </Link>
    </h1>
  );
}   