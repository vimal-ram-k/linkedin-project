import { HomeCatagory } from '../components/category/homecatogary';
import { HomeNavigationBar } from '../components/navigationbar/homenavigationbar';
export const Home = () => {
  return (
    <div>
      <HomeNavigationBar />
      <HomeCatagory />

      <div className=" container d-flex flex-column row-gap-2">
        <h1 className=" m-0 p-0 text-center opacity-75">
          Welcome to your professional community
        </h1>

        <button className=" btn border border-black rounded-5 w-100">
          <div className=" d-flex align-items-center py-1 column-gap-2 justify-content-center">
            <i className=" bi bi-google"></i>
            <span className=" opacity-75 fw-medium">Sign in with Google</span>
          </div>
        </button>

        <button className=" btn border border-black rounded-5 w-100">
          <div className=" d-flex align-items-center py-1 column-gap-2 justify-content-center">
            <i className=" bi bi-mailbox2"></i>
            <span className=" opacity-75 fw-medium">Sign in with email</span>
          </div>
        </button>

        <p
          className=" text-center fw-normal opacity-75 py-2 "
          style={{ fontSize: '0.8rem' }}
        >
          By clicking Continue to join or sign in, you agree to LinkedIn’s User
          Agreement, Privacy Policy, and Cookie Policy.
        </p>

        <span className=" fs-6 text-center">
          New to LinkedIn?
          <button className=" px-2 bg-transparent border border-black-0 text-primary fw-bold">
            Join now
          </button>
        </span>
      </div>

      <div className=" container mt-5 bg-body-tertiary  py-5">
        <h1
          className=" fw-normal"
          style={{ fontSize: '1.5rem' }}
        >
          Explore collaborative articles
        </h1>

        <p className=" fw-normal opacity-75 py-2">
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
              className=" btn border text-primary fw-bold border-primary rounded-5 px-3 py-2"
              style={{ fontSize: '0.9rem' }}
            >
              Show all
            </button>
          </li>
        </ul>
      </div>

      <div className=" py-5 container">
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

      <div className=" py-5 bg-body-tertiary ">
        <h1
          className=" text-center m-auto text-danger"
          style={{ fontSize: ' 1.3rem', width: '80dvw' }}
        >
          Post your job for millions of people to see
        </h1>
        <button
          className=" btn border border-primary mx-5 mt-5 text-primary fw-bold rounded-5 px-3 py-2"
          style={{ fontSize: '0.9rem' }}
        >
          Post a job
        </button>
      </div>
    </div>
  );
};
