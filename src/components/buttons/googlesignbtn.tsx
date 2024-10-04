import { Link } from 'react-router-dom';

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
