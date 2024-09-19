import { Link } from 'react-router-dom';
import { HomeCatagory } from '../category/homecatogary';

export const HomeNavigationBar = () => {
  return (
    <header className=" container py-2 d-flex justify-content-lg-around justify-content-between align-items-center">
      <div>
        <img
          src="/linkedin-svgrepo-com.svg"
          className="logo d-lg-none"
          aria-describedby="logo"
          alt="Linkedin Logo"
          style={{ width: '35px' }}
        />
        <img
          src="/linkedin-logo-3801732491.png"
          className="logo d-none d-lg-block"
          aria-describedby="logo"
          alt="Linkedin Logo"
          style={{ width: '130px', height: '30px' }}
        />
      </div>
      <div className=" d-flex column-gap-3 align-items-center">
        <HomeCatagory display="d-none d-lg-inline" />
        <div
          className=" bg-secondary-subtle d-none d-xl-inline"
          style={{ width: '2px', height: '45px' }}
        ></div>
        <nav className=" d-flex column-gap-2">
          <Link
            to="/login/signin"
            data-testid="signin-btn"
          >
            <button
              className=" btn rounded-5 fs-6"
              style={{
                width: '100px',
                height: '50px',
                color: '#0965c2',
                border: '1px solid #0965c2',
                fontWeight: 'bold',
              }}
            >
              Sign in
            </button>
          </Link>
          <button
            className=" btn border text-white rounded-5"
            style={{
              width: '120px',
              height: '50px',
              backgroundColor: '#0965c2',
              fontWeight: 'bold',
              fontSize: '0.9rem',
            }}
          >
            Join now
          </button>
        </nav>
      </div>
    </header>
  );
};
