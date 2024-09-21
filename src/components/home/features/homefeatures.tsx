import image1 from '../../../assets/images/dbvmk0tsk0o0hd59fi64z3own.png';
import image2 from '../../../assets/images/2r8kd5zqpi905lkzsshdlvvn5.png';
import image3 from '../../../assets/images/ann24vsq7r0ux3vipqa1n90gg.png';
import { useState } from 'react';

export const HomeFeatures = () => {
  const [currentSection, setCurrentSection] = useState(1);

  // Function to handle scrolling based on button click
  const flexScroller = (event: React.MouseEvent<HTMLButtonElement>) => {
    const btnId = event.currentTarget.id;
    let newSection = currentSection;

    if (btnId === 'prev-btn' && currentSection > 1) {
      newSection = currentSection - 1;
    } else if (btnId === 'next-btn' && currentSection < 3) {
      newSection = currentSection + 1;
    }

    // Scroll to the new section
    const flexSection = document.getElementById(`section${newSection}`);
    flexSection?.scrollIntoView({ behavior: 'smooth' });

    // Update the current section
    setCurrentSection(newSection);
  };
  return (
    <div
      className=" container-fluid d-lg-flex justify-content-lg-center position-relative gr-light-bg py-5"
      style={{ height: 'auto' }}
    >
      {currentSection > 1 ? (
        <button
          onClick={flexScroller}
          id="prev-btn"
          className=" position-absolute top-50 border-0 bg-black bg-opacity-75 rounded-circle z-3 d-lg-none"
          style={{ width: '40px', height: '40px' }}
        >
          <i className=" bi bi-arrow-left text-white"></i>
        </button>
      ) : (
        <></>
      )}
      <ul
        id="flex-scroller"
        className=" container d-flex column-gap-5 d-lg-block overflow-scrol"
        style={{ scrollbarWidth: 'none' }}
      >
        <li
          className="row-gap-3 row"
          id="section1"
        >
          <div className=" col-lg-6 order-lg-1 d-lg-flex justify-content-lg-center">
            <img
              src={image1}
              alt=""
              width={300}
            />
          </div>
          <div className=" col-lg-6">
            <h1
              className=" rd-header"
              style={{ fontSize: '1.3rem' }}
            >
              Let the right people know you’re open to work
            </h1>
            <p>
              With the Open To Work feature, you can privately tell recruiters
              or publicly share with the LinkedIn community that you are looking
              for new job opportunities.
            </p>
          </div>
        </li>
        <li
          className="row row-gap-3"
          id="section2"
        >
          <div className=" col-lg-6 order-lg-1 d-lg-flex justify-content-lg-center">
            <img
              src={image2}
              alt=""
              width={300}
            />
          </div>
          <div className=" col-lg-6 order-1">
            <h1
              className=" rd-header"
              style={{ fontSize: '1.3rem' }}
            >
              Conversations today could lead to opportunity tomorrow
            </h1>
            <p>
              Sending messages to people you know is a great way to strengthen
              relationships as you take the next step in your career.
            </p>
          </div>
        </li>
        <li
          className="row row-gap-3"
          id="section3"
        >
          <div className=" col-lg-6 order-lg-1 d-lg-flex justify-content-lg-center">
            <img
              src={image3}
              alt=""
              width={300}
            />
          </div>
          <div className=" col-lg-6">
            <h1
              className=" rd-header"
              style={{ fontSize: '1.3rem' }}
            >
              Stay up to date on your industry
            </h1>
            <p>
              From live videos, to stories, to newsletters and more, LinkedIn is
              full of ways to stay up to date on the latest discussions in your
              industry.
            </p>
          </div>
        </li>
      </ul>
      {currentSection < 3 ? (
        <button
          id="next-btn"
          onClick={flexScroller}
          className=" position-absolute border-0 bg-black bg-opacity-75 rounded-circle z-3 d-lg-none"
          style={{ width: '40px', height: '40px', right: '0', top: '50%' }}
        >
          <i className=" bi bi-arrow-right text-white"></i>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
