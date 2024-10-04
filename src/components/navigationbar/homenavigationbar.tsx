import { Link } from 'react-router-dom';
import { HomeCatagory } from '../category/homecatogary';

export const HomeNavigationBar = () => {
  return (
    <header className=" container py-2 d-flex justify-content-lg-around justify-content-between align-items-center">
      <div>
        <Link
          className=""
          to={'/'}
        >
          {/* <img
            src="/linkedin-svgrepo-com.svg"
            className="logo d-lg-none"
            aria-describedby="logo"
            alt="Linkedin Logo"
            style={{ width: '35px' }}
          /> */}
          <img
            src="/linkedin-logo-3801732491.png"
            // className="logo d-none d-lg-block"
            aria-describedby="logo"
            alt="Linkedin Logo2"
            style={{ width: '100px', height: '25px' }}
          />
        </Link>
      </div>
      <div className=" d-flex column-gap-3 align-items-center">
        <HomeCatagory display="d-none d-lg-inline" />
        <div
          className=" bg-secondary-subtle d-none d-xl-inline"
          style={{ width: '2px', height: '45px' }}
        ></div>
        <nav className=" d-flex column-gap-2">
          <Link
            to="/signup"
            data-testid="signin-btn"
          >
            <button
              className=" btn border-0 bg-transparent fw-medium"
              style={{
                width: '120px',
                height: '45px',
                backgroundColor: '#0965c2',
                fontWeight: 'bold',
                fontSize: '0.9rem',
              }}
            >
              Join now
            </button>
          </Link>
          <Link
            to="/login/signin"
            data-testid="signin-btn"
          >
            <button
              className="rounded-5 fs-6 fw-medium signin-btn"
              style={{
                width: '100px',
                height: '45px',
                color: '#0965c2',
                border: '1px solid #0965c2',
                fontWeight: 'bold',
              }}
            >
              Sign in
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
