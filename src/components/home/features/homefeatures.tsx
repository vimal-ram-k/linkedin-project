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
      className=" d-flex position-relative container"
      style={{ height: '60dvh', backgroundColor: '#f2f2f0' }}
    >
      <button
        onClick={flexScroller}
        id="prev-btn"
        className=" position-absolute top-50 border-0 bg-black bg-opacity-75 rounded-circle z-3"
        style={{ width: '40px', height: '40px' }}
      >
        <i className=" bi bi-arrow-left-circle-fill text-white"></i>
      </button>
      <ul
        id="flex-scroller"
        className=" d-flex align-items-center column-gap-4 overflow-scroll"
        style={{ scrollbarWidth: 'none' }}
      >
        <li
          className=" d-flex flex-column gap-2"
          id="section1"
        >
          <img
            src={image1}
            alt=""
            width={300}
          />
          <h1 style={{ color: '#b14020', fontSize: '1.3rem' }}>
            Let the right people know you’re open to work
          </h1>
          <p>
            With the Open To Work feature, you can privately tell recruiters or
            publicly share with the LinkedIn community that you are looking for
            new job opportunities.
          </p>
        </li>
        <li
          className=" d-flex flex-column gap-2"
          id="section2"
        >
          <img
            src={image2}
            alt=""
            width={300}
          />
          <h1 style={{ color: '#b14020', fontSize: '1.3rem' }}>
            Conversations today could lead to opportunity tomorrow
          </h1>
          <p>
            Sending messages to people you know is a great way to strengthen
            relationships as you take the next step in your career.
          </p>
        </li>
        <li
          className=" d-flex flex-column gap-2"
          id="section3"
        >
          <img
            src={image3}
            alt=""
            width={300}
          />
          <h1 style={{ color: '#b14020', fontSize: '1.3rem' }}>
            Stay up to date on your industry
          </h1>
          <p>
            From live videos, to stories, to newsletters and more, LinkedIn is
            full of ways to stay up to date on the latest discussions in your
            industry.
          </p>
        </li>
      </ul>
      {currentSection < 4 ? (
        <button
          id="next-btn"
          onClick={flexScroller}
          className=" position-absolute border-0 bg-black bg-opacity-75 rounded-circle z-3"
          style={{ width: '40px', height: '40px', right: '0', top: '50%' }}
        >
          <i className=" bi bi-arrow-right-circle-fill text-white"></i>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
