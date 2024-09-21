import { Link } from 'react-router-dom';
import linkedinlogo from '/linkedin-logo-3801732491.png';
import { TermsAndConditions } from '../termsandcondition/termsandconditions';
import { GoogleSignButton } from '../buttons/googlesignbtn';
import { AppleSignInBtn } from '../buttons/applesigninbtn';
import { JoinNow } from '../buttons/joinnowbtn';
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { createAsync } from '../../features/auth/authSlice';
export const SigninForm = () => {
  const appDispatch: AppDispatch = useDispatch();
  return (
    <div className=" container-fluid py-5 d-flex justify-content-center align-items-center">
      <div className=" ">
        <Link to="/home">
          <img
            src={linkedinlogo}
            alt=""
            width={120}
            height={25}
          />
        </Link>
        <form
          className=" pt-4 m-auto "
          style={{ width: '400px' }}
        >
          <h1 className=" m-0 fw-medium">Sign in</h1>
          <span className=" fw-normal">
            Stay updated on your professional word
          </span>
          <input
            className=" ps-3 my-4 d-block rounded-2 border border-1 border-opacity-75 border-black"
            type="text"
            name="username"
            placeholder="Email or phone"
            style={{ height: '50px', width: '300px' }}
          />
          <input
            type="password"
            className="ps-3 my-3 d-block rounded-2 border border-1 border-opacity-75 border-black"
            name="password"
            id="usr-password"
            style={{ height: '50px', width: '300px' }}
            placeholder="Password"
          />
          <button className=" d-block border-0 bg-transparent">
            <Link
              to="/forgotpassword"
              className=" fw-light"
              style={{ color: '#0965c2' }}
            >
              Forgot password?
            </Link>
          </button>
          <Link
            to="/feed"
            className=""
            data-testid="test-submit"
          >
            <button
              className="rounded-5 border border-0 my-3 signin-btn-colored fw-medium "
              onClick={() => appDispatch(createAsync())}
              style={{ height: '50px', width: '300px' }}
            >
              Sign in
            </button>
          </Link>

          <div className=" d-flex align-items-center column-gap-2">
            <span
              className=" bg-black opacity-25 "
              style={{ width: '130px', height: '1px' }}
            ></span>
            <h1
              className=" opacity-50 m-0 "
              style={{ fontSize: '0.8rem' }}
            >
              or
            </h1>
            <span
              className=" bg-black opacity-25 "
              style={{ width: '130px', height: '1px' }}
            ></span>
          </div>

          <div className="  d-flex flex-column row-gap-2">
            <TermsAndConditions />
            <GoogleSignButton />
            <AppleSignInBtn />
            <div className=" mt-4">
              <JoinNow />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
