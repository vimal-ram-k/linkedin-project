import { Link } from 'react-router-dom';
import { HomeCatagory } from '../category/homecatogary';

export const HomeNavigationBar = () => {
  return (
    <header className=" container py-2 d-flex justify-content-lg-around justify-content-between align-items-center">
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 69e9878 (Fixed layout issue, font style, links)
        <Link
          className=""
          to={'/'}
        >
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
<<<<<<< HEAD
<<<<<<< HEAD
            alt="Linkedin Logo2"
=======
            alt="Linkedin Logo"
>>>>>>> f885d26 (Fixed css issue)
            style={{ width: '110px', height: '30px' }}
          />
        </Link>
=======
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
>>>>>>> f88737e (Design responsive landing page navigationbar layout)
=======
            alt="Linkedin Logo"
            style={{ width: '110px', height: '30px' }}
          />
        </Link>
>>>>>>> 69e9878 (Fixed layout issue, font style, links)
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
<<<<<<< HEAD
<<<<<<< HEAD
              className="rounded-5 fs-6 signin-btn"
=======
              className=" btn rounded-5 fs-6"
>>>>>>> f88737e (Design responsive landing page navigationbar layout)
=======
              className="rounded-5 fs-6 signin-btn"
>>>>>>> 69e9878 (Fixed layout issue, font style, links)
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
