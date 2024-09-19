import { Link } from 'react-router-dom';
import linkedinlogo from '../../assets/images/linkedin-logo-3801732491.png';
import { TermsAndConditions } from '../termsandcondition/termsandconditions';
import { GoogleSignButton } from '../buttons/googlesignbtn';
import { AppleSignInBtn } from '../buttons/applesigninbtn';
import { JoinNow } from '../buttons/joinnowbtn';
<<<<<<< HEAD
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { createAsync } from '../../features/auth/authSlice';
=======
import { login } from '../../features/auth/authSlice';
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD

>>>>>>> fc141dd (Add redux toolkit state management feature)
=======
import { createAsync } from '../../features/auth/authSlice';
>>>>>>> 0978ff7 (Add createasyncthunk feature)
export const SigninForm = () => {
  const appDispatch: AppDispatch = useDispatch();
  return (
    <div className=" container ">
      <Link to="/home">
        <img
          src={linkedinlogo}
          alt=""
          width={150}
          height={150}
        />
      </Link>
      <form className=" container ps-3">
        <h1>Sign in</h1>
        <span>Stay updated on your professional word</span>
        <input
          className=" ps-3 my-3 d-block rounded-2 border border-1 border-opacity-75 border-black"
          type="text"
          name="username"
          placeholder="Email or phone"
          style={{ width: '80dvw', height: '50px' }}
        />
        <input
          type="password"
          className="ps-3 my-3 d-block rounded-2 border border-1 border-opacity-75 border-black"
          name="password"
          id="usr-password"
          placeholder="Password"
          style={{ width: '80dvw', height: '50px' }}
        />
        <button
          className=" d-block border-0 bg-transparent"
          style={{}}
        >
          <Link
            to="/forgotpassword"
            className=" fw-bold"
            style={{ color: '#0965c2' }}
          >
            Forgot password?
          </Link>
        </button>
        <button
          className=" text-white rounded-5 border border-0 my-3"
<<<<<<< HEAD
<<<<<<< HEAD
          onClick={() => appDispatch(createAsync())}
=======
          onClick={() => appDispatch(login())}
>>>>>>> fc141dd (Add redux toolkit state management feature)
=======
          onClick={() => appDispatch(createAsync())}
>>>>>>> 0978ff7 (Add createasyncthunk feature)
          style={{ backgroundColor: '#0965c2', width: '80dvw', height: '50px' }}
        >
          <Link
            to="/feed"
            className=" text-white"
            data-testid="test-submit"
          >
            Sign in
          </Link>
        </button>

        <div className="mt-2 d-flex align-items-center justify-content-around">
          <span
            className=" bg-black opacity-25 "
            style={{ width: '40dvw', height: '2px' }}
          ></span>
          <h1
            className=" opacity-50 m-0 "
            style={{ fontSize: '0.8rem' }}
          >
            or
          </h1>
          <span
            className=" bg-black opacity-25 "
            style={{ width: '40dvw', height: '2px' }}
          ></span>
        </div>
      </form>

      <div
        className="m-auto"
        style={{ width: '80dvw' }}
      >
        <TermsAndConditions />
        <GoogleSignButton />
        <AppleSignInBtn />
        <JoinNow />
      </div>
    </div>
  );
};
