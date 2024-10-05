import { Link, useNavigate } from 'react-router-dom';
import linkedinlogo from '/linkedin-logo-3801732491.png';
import { TermsAndConditions } from '../termsandcondition/termsandconditions';
import { GoogleSignButton } from '../buttons/googlesignbtn';
import { AppleSignInBtn } from '../buttons/applesigninbtn';
import { JoinNow } from '../buttons/joinnowbtn';
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { createAsync } from '../../features/auth/authSlice';
import React, { useState } from 'react';
import axios from 'axios';
export const SigninForm = () => {
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: '',
    userpassword: '',
  });

  const appDispatch: AppDispatch = useDispatch();

  const authValidation = async (e: React.MouseEvent) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('useremail', userDetails.username);
    formdata.append('userpassword', userDetails.userpassword);
    try {
      const data = await axios.post('/api/v1/users/user', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(data);
      if (data.status === 200) {
        appDispatch(createAsync());
        navigate('/feed');
      }
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <div
      className=" container py-5 d-flex flex-column row-gap-4"
      style={{ maxWidth: '420px' }}
    >
      <Link to="/home">
        <img
          src={linkedinlogo}
          alt=""
          width={120}
          height={25}
        />
      </Link>
      <form
        className=" pt-4 "
        style={{ width: '400px' }}
      >
        <h1 className=" m-0 fw-medium">Sign in</h1>
        <span className=" fw-normal">
          Stay updated on your professional word
        </span>
        <input
          className=" ps-3 my-4 d-block rounded-2 border border-1 border-opacity-75 border-black w-100"
          type="text"
          name="username"
          placeholder="Email or phone"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUserDetails((prev) => ({
              ...prev,
              username: event.target.value,
            }));
          }}
          style={{ height: '50px' }}
        />
        <input
          type="password"
          className="ps-3 my-3 d-block rounded-2 border border-1 border-opacity-75 border-black w-100"
          name="password"
          id="usr-password"
          style={{ height: '50px' }}
          placeholder="Password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUserDetails((prev) => ({
              ...prev,
              userpassword: event.target.value,
            }));
          }}
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
            className="rounded-5 border border-0 my-3 signin-btn-colored fw-medium  w-100 "
            onClick={(e: React.MouseEvent) => {
              authValidation(e);
            }}
            style={{ height: '50px' }}
          >
            Sign in
          </button>
        </Link>
        {error && (
          <span className=" text-bg-danger text-white d-block text-center py-2 rounded-3 fw-normal">
            User not found
          </span>
        )}

        <div className=" d-flex align-items-center column-gap-2">
          <span
            className=" bg-black opacity-25 "
            style={{ width: '200px', height: '1px' }}
          ></span>
          <h1
            className=" opacity-50 m-0 "
            style={{ fontSize: '0.8rem' }}
          >
            or
          </h1>
          <span
            className=" bg-black opacity-25 "
            style={{ width: '200px', height: '1px' }}
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
  );
};
