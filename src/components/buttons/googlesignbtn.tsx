import { Link } from 'react-router-dom';

export const GoogleSignButton = () => {
  return (
    <button className=" btn border border-black rounded-5">
      <Link
        className=" "
        style={{ width: '400px' }}
        to="/login/signin"
      >
        <div className=" d-flex align-items-center  column-gap-2 justify-content-center">
          <i className=" bi bi-google"></i>
          <span className=" opacity-75 fw-medium">Sign in with Google</span>
        </div>
      </Link>
    </button>
  );
};
