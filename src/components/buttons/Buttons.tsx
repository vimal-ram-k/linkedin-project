import { Link } from 'react-router-dom';

export const JoinNowButton = () => {
  return (
    <Link
      to="/signup"
      data-testid="signin-btn"
    >
      <button
        className=" btn border-0 bg-transparent fw-medium"
        style={{
          height: '45px',
          backgroundColor: '#0965c2',
          fontWeight: 'bold',
          fontSize: '0.9rem',
        }}
      >
        Join now
      </button>
    </Link>
  );
};

export const SigninButton = () => {
  return (
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
  );
};

export const GoogleSignButton = () => {
  return (
    <Link
      className=""
      to="/login/signin"
    >
      <button
        className=" btn signin-btn-colored rounded-5 "
        style={{ width: '400px' }}
      >
        <div className=" d-flex align-items-center  column-gap-2 justify-content-center">
          <img
            src="icons8-google.svg"
            alt=""
            width={30}
            className=" bg-white rounded-5 p-1"
          />
          <span className=" fw-semibold text-white">Sign in with Google</span>
        </div>
      </button>
    </Link>
  );
};

export const EmailSigninButton = () => {
  return (
    <Link to={'/login/singup'}>
      <button
        className=" btn border border-black py-2 rounded-5"
        style={{ width: '400px' }}
      >
        <div className=" d-flex align-items-center column-gap-2 justify-content-center">
          <span className=" opacity-75 fw-semibold">Sign in with email</span>
        </div>
      </button>
    </Link>
  );
};

export const GetStartedButton = () => {
  return (
    <Link
      to="/login/signin"
      data-testid="signin-btn"
    >
      <button
        className=" btn border border-0 text-white rounded-5"
        style={{
          width: '120px',
          height: '35px',
          backgroundColor: '#0965c2',
          fontWeight: 'bold',
          fontSize: '0.9rem',
        }}
      >
        Get started
      </button>
    </Link>
  );
};
