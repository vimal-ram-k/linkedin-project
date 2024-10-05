import { Link, useNavigate } from 'react-router-dom';
import { TermsAndConditions } from '../../components/termsandcondition/termsandconditions';
import linkedin_logo from '/linkedin-logo-3801732491.png';
import { CommonFooter } from '../../components/footer/commonfooter';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  GoogleSignButton,
  JoinNowButton,
} from '../../components/buttons/Buttons';

export const Signup = () => {
  const Navigator = useNavigate();
  const [height, setHeight] = useState<number>(0);
  const [notification, setNotification] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState({
    useremail: '',
    userpassword: '',
  });

  useEffect(() => {
    const getHeight = () => {
      setHeight(window.innerHeight);
    };

    getHeight();

    window.addEventListener('resize', getHeight);

    return () => {
      window.removeEventListener('resize', getHeight);
    };
  }, []);

  const AuthValidation = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent page reload
    const formdata = new FormData();
    formdata.append('useremail', userDetails.useremail);
    formdata.append('userpassword', userDetails.userpassword);

    try {
      const response = await axios.post(
        'https://linkedin-server-production.up.railway.app/api/v1/users/add',
        formdata,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Log the response or handle success
      console.log('Success:', response.data);
      setNotification(true);

      setTimeout(() => {
        Navigator('/login/signin');
      }, 2000);
    } catch (error) {
      // Handle error
      console.error('Error during authentication:', error);
    }
  };

  return (
    <div className=" container py-3 d-flex justify-content-center">
      <div
        className=""
        style={{ maxWidth: '500px' }}
      >
        <section>
          <img
            src={linkedin_logo}
            alt=""
            style={{ width: '120px', height: '30px' }}
          />
        </section>

        <form
          action=""
          className=" container d-flex flex-column row-gap-3 py-4"
        >
          <h1 className="">Make the most of your professional life</h1>
          <label
            htmlFor="phnoremail"
            className=" fw-normal opacity-75"
          >
            Email or Phone number
          </label>
          <input
            type="text"
            className=" ps-2 py-2"
            value={userDetails.useremail}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUserDetails((prev) => ({
                ...prev,
                useremail: event.target.value,
              }));
            }}
          />
          <label
            htmlFor="password"
            className=" fw-normal opacity-75"
          >
            Password (6 + characters)
          </label>
          <input
            type="password"
            className=" ps-2 py-2"
            value={userDetails.userpassword}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUserDetails((prev) => ({
                ...prev,
                userpassword: event.target.value,
              }));
            }}
          />
          <div className=" d-flex align-items-center column-gap-2 py-3">
            <input
              type="checkbox"
              id="rememberme"
              checked
            />
            <label htmlFor="rememberme">Remember me</label>
          </div>
          {notification && (
            <span className=" bg-success text-white d-block text-center py-2 rounded-3 fw-normal">
              New User created successfully..
            </span>
          )}
          <TermsAndConditions />
          <button
            onClick={(e: React.MouseEvent) => {
              AuthValidation(e);
            }}
            className="signin-btn-colored border-0 py-2 rounded-5 fw-normal"
          >
            Agreee & Join
          </button>

          <div className=" d-flex justify-content-center align-items-center column-gap-2">
            <span
              className=" bg-black opacity-25 "
              style={{ width: '170px', height: '1px' }}
            ></span>
            <h1
              className=" opacity-50 m-0 "
              style={{ fontSize: '0.8rem' }}
            >
              or
            </h1>
            <span
              className=" bg-black opacity-25 "
              style={{ width: '170px', height: '1px' }}
            ></span>
          </div>
          <GoogleSignButton />
          <JoinNowButton />
          <h1 className=" fs-6  text-center opacity-75">
            Looking to create a page for bussiness?{' '}
            <Link
              to="/"
              className=" fw-normal"
            >
              Get help
            </Link>
          </h1>
        </form>
        <div className=" d-lg-none">
          <CommonFooter />
        </div>
      </div>
      {height > 768 ? (
        <div className=" d-none d-lg-block position-absolute bottom-0 ">
          <CommonFooter />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
