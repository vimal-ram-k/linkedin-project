import { Link } from 'react-router-dom';

export const MainLogo = () => {
  return (
    <Link
      className=""
      to={'/'}
    >
      <img
        src="/linkedin-logo-3801732491.png"
        // className="logo d-none d-lg-block"
        aria-describedby="logo"
        alt="Linkedin Logo2"
        style={{ width: '100px', height: '25px' }}
      />
    </Link>
  );
};
