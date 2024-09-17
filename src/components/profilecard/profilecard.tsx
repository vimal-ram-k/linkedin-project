import { useState } from 'react';
import banner from '../../assets/images/Landscape - LinkedIn Banner 2.png';
import companylogo from '../../assets/images/capgemini-logo-5.jpg';
import profile from '../../assets/images/1722056500481.jpg';

import { SubcriptionCard } from '../subcriptioncard/subcriptioncard';
import { ProfileViwerCard } from '../subcriptioncard/profileviwercard';
import { ExtraOptionsCard } from '../subcriptioncard/extraoptionscard';
export const ProfileCard = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const showMoreToggle = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className=" col-12 col-sm-4 col-lg-3 col-xl-2 col-xxl-2">
      <div className=" card mt-2 rounded-top-4 rounded-0 pb-3">
        <div className=" card-img  position-relative">
          <img
            src={banner}
            alt=""
            className=" rounded-top-4 w-100"
            height={50}
          />
        </div>
        <div className=" card-body p-0 mx-4">
          <button className="card-profile bg-transparent rounded-circle border-0 position-absolute">
            <img
              src={profile}
              className=" rounded-circle border border-white border-3"
              width={75}
              alt=""
            />
          </button>
          <div className=" mt-4">
            <h1 className=" username pt-3 m-0">Vimal Ram K</h1>
            <p className=" about p-0 m-0">
              Experienced React Developer | Full-Stack Expertise | CI/CD &
              DevOps Specialist
            </p>
            <p className=" location p-0 m-0">Bengaluru, Karnataka</p>
            <div className=" p-0 card-footer bg-transparent border-0 py-1">
              <div className=" d-flex align-items-center column-gap-1">
                <img
                  src={companylogo}
                  className="company-logo"
                  alt=""
                />
                <h1 className=" about m-0">Capgemini</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showMore && (
        <>
          <SubcriptionCard />
          <ProfileViwerCard />
          <ExtraOptionsCard />
        </>
      )}

      <button
        className=" py-3 d-flex align-content-center justify-content-center border-0 w-100 btn d-sm-none"
        onClick={showMoreToggle}
      >
        <h1
          className="fw-normal m-0"
          style={{ fontSize: '0.9rem' }}
          data-testid="show-less"
        >
          Show less
          <i
            className=" bi bi-caret-down-fill"
            style={{ fontSize: '0.8rem' }}
          ></i>
        </h1>
      </button>

      <div className=" d-none d-sm-block">
        <SubcriptionCard />
        <ProfileViwerCard />
        <ExtraOptionsCard />
      </div>
    </div>
  );
};
