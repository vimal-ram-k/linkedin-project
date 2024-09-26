import { Link } from 'react-router-dom';
import { GoogleSignButton } from '../../components/buttons/googlesignbtn';
import { JoinNow } from '../../components/buttons/joinnowbtn';
import { TermsAndConditions } from '../../components/termsandcondition/termsandconditions';
import linkedin_logo from '/linkedin-logo-3801732491.png';
import { CommonFooter } from '../../components/footer/commonfooter';
import axios from 'axios';
import React, { useState } from 'react';

export const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    useremail: '',
    userpassword: '',
  });

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
          <TermsAndConditions />
          <button
            onClick={(e: React.MouseEvent) => {
              AuthValidation(e);
            }}
            className="signin-btn-colored border-0 py-2 rounded-5 fw-normal"
          >
            Agreee & Join
          </button>

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
          <GoogleSignButton />
          <JoinNow />
          <h1 className=" fw-normal fs-6 opacity-75 text-center">
            Looking to create a page for bussiness? <Link to="/">Get help</Link>
          </h1>
        </form>
      </div>
      <div className=" position-absolute bottom-0 ">
        <CommonFooter />
      </div>
    </div>
  );
};
