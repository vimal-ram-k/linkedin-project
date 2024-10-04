import { Link } from 'react-router-dom';

export const AppleSignInBtn = () => {
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
