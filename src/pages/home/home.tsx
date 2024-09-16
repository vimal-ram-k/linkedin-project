import { Link } from 'react-router-dom';
import { HomeCatagory } from '../../components/category/homecatogary';
import { HomeNavigationBar } from '../../components/navigationbar/homenavigationbar';
import './style/home.css';
import { HomeFeatures } from '../../components/home/features/homefeatures';
import searchjob from '../../assets/1dhh8rr3wohexkaya6jhn2y8j.svg';
import connectpeople from '../../assets/43h6n82li4xu0q23s8jqizk6j.svg';

export const Home = () => {
  return (
    <div>
      <HomeNavigationBar />
      <HomeCatagory />

      <div
        className=" container d-flex flex-column row-gap-2"
        style={{ height: '60dvh' }}
      >
        <h1
          className=" mt-3 p-0 text-center"
          style={{ color: '#595c5e', fontSize: '1.8rem' }}
        >
          Welcome to your professional community
        </h1>

        <button className=" mt-4 btn border border-black rounded-5 w-100">
          <div className=" d-flex align-items-center  column-gap-2 justify-content-center">
            <i className=" bi bi-google"></i>
            <span className=" opacity-75 fw-medium">Sign in with Google</span>
          </div>
        </button>

        <button className="mt-2 btn border border-black py-2 rounded-5 w-100">
          <div className=" d-flex align-items-center column-gap-2 justify-content-center">
            <span className=" opacity-75 fw-medium">Sign in with email</span>
          </div>
        </button>

        <p
          className=" text-center opacity-75 text-wrap  mt-3 "
          style={{ fontSize: '0.8rem' }}
        >
          By clicking Continue to join or sign in, you agree to LinkedIn’s
          <Link
            to="/"
            className=" support-link ps-1 "
          >
            User
          </Link>
          <Link
            to="/"
            className="support-link"
          >
            Agreement, Privacy Policy
          </Link>
          , and
          <Link
            to="/"
            className="support-link ps-1"
          >
            Cookie Policy
          </Link>
          .
        </p>

        <span className=" fs-6 text-center fw-normal">
          New to LinkedIn?
          <button
            className=" px-2 bg-transparent border-0 fw-normal"
            style={{ color: '#0965c2' }}
          >
            Join now
          </button>
        </span>
      </div>

      <div
        className=" container py-5"
        style={{ height: '50dvh', backgroundColor: '#f2f2f0' }}
      >
        <h1
          className=" fw-normal"
          style={{ fontSize: '1.5rem' }}
        >
          Explore collaborative articles
        </h1>

        <p className=" fw-normal py-2">
          We’re unlocking community knowledge in a new way. Experts add insights
          directly into each article, started with the help of AI.
        </p>

        <ul className=" d-flex flex-wrap gap-2 column-gap-2">
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Marketing
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Public Administration
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Healthcare
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Engineering
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              IT Services
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Sustainability
            </button>
          </li>
          <li className="">
            <button
              className=" btn  text-primary fw-bold rounded-5 px-3 py-2"
              style={{
                fontSize: '0.9rem',
                color: '#0965c2',
                border: '1px solid #0965c2',
              }}
            >
              Show all
            </button>
          </li>
        </ul>
      </div>

      <div
        className=" py-5 container"
        style={{ height: '50dvh' }}
      >
        <h1
          className=" py-3"
          style={{ fontSize: ' 1.3rem' }}
        >
          Find the right job or intership for you
        </h1>
        <ul className=" d-flex flex-wrap gap-2 column-gap-2">
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Engineering
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Bussiness Developement
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Finance
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Administrative Assiant
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Retail Associate
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Customer Service
            </button>
          </li>
        </ul>
      </div>

      <div
        className=" py-5  "
        style={{ backgroundColor: '#f1ebe4' }}
      >
        <h1
          className=" text-center m-auto"
          style={{ fontSize: ' 1.3rem', width: '80dvw', color: '#b14020' }}
        >
          Post your job for millions of people to see
        </h1>
        <button
          className=" btn mx-5 mt-5 fw-bold rounded-5 px-3 py-2"
          style={{
            fontSize: '0.9rem',
            color: '#0965c2',
            border: '1px solid #0965c2',
          }}
        >
          Post a job
        </button>
      </div>

      <div
        className=" py-5 container"
        style={{ height: '50dvh' }}
      >
        <h1
          className=" py-3"
          style={{ fontSize: ' 1.3rem' }}
        >
          Discover the best software tools
        </h1>
        <p>
          Connect with buyers who have first-hand experience to find the best
          products for you.
        </p>
        <ul className=" d-flex flex-wrap gap-2 column-gap-2">
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Engineering
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Bussiness Developement
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Finance
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Administrative Assiant
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Retail Associate
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Customer Service
            </button>
          </li>
        </ul>
      </div>

      <div
        className=" py-5 container"
        style={{ height: '50dvh' }}
      >
        <h1
          className=" py-3"
          style={{ fontSize: ' 1.3rem' }}
        >
          Keep your mind sharp with games
        </h1>
        <p>
          Take a break and reconnect with your network through quick daily
          games.
        </p>
        <ul className=" d-flex flex-wrap gap-2 column-gap-2">
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Pinpoint
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Queens
            </button>
          </li>
          <li className="">
            <button
              className=" btn border border-black fw-normal rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Crossclimb
            </button>
          </li>
        </ul>
      </div>

      <HomeFeatures />

      <div
        className=" py-5 px-3 d-flex flex-column gap-3"
        style={{ height: '50dvh' }}
      >
        <img
          src={connectpeople}
          alt=""
          width={300}
        />
        <h1 style={{ fontSize: '1.4rem' }}>
          {' '}
          Connect with people who can help{' '}
        </h1>
        <button
          className=" border border-1 py-1 bg-transparent rounded-5 text-black opacity-75 fw-medium"
          style={{ width: '50dvw' }}
        >
          Find people you know
        </button>
      </div>

      <div
        className=" py-5 px-3 d-flex flex-column gap-3"
        style={{ height: '50dvh' }}
      >
        <img
          src={searchjob}
          alt=""
          width={300}
        />
        <h1 style={{ fontSize: '1.4rem' }}>
          {' '}
          Learn the skills you need to succeed
        </h1>
        <section className=" border rounded-2 px-3 position-relative py-3">
          <h1
            className=" position-absolute opacity-75"
            style={{ fontSize: '1rem' }}
          >
            Choose a topic learn about
          </h1>
          <select
            name=""
            id=""
            className=" border-1 bg-transparent border border-0 opacity-0"
          >
            <option
              value="IT"
              disabled
              hidden
            >
              Choose a topic to learn about
            </option>
            <option value="IT">Choose a topic to learn about</option>
            <option value="IT">Choose a topic to learn about</option>
          </select>
        </section>
      </div>
    </div>
  );
};
