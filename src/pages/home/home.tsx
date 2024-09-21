import { HomeCatagory } from '../../components/category/homecatogary';
import { HomeNavigationBar } from '../../components/navigationbar/homenavigationbar';
import { HomeFeatures } from '../../components/home/features/homefeatures';
import searchjob from '../../assets/images/1dhh8rr3wohexkaya6jhn2y8j.svg';
import connectpeople from '../../assets/images/43h6n82li4xu0q23s8jqizk6j.svg';
import { TermsAndConditions } from '../../components/termsandcondition/termsandconditions';
import { GoogleSignButton } from '../../components/buttons/googlesignbtn';
import { AppleSignInBtn } from '../../components/buttons/applesigninbtn';
import { JoinNow } from '../../components/buttons/joinnowbtn';
import mainbanner from '../../assets/images/AAYAAgSrAAgAAQAAAAAAAGM6w-NyPk-_SVikYiCJ6V3Z-Q.png';
import { Footer } from '../../components/footer/footer';
import { Link } from 'react-router-dom';
import home_data from './home.json';
import footer_banner_logo from '../../assets/images/eghb2zc0p5s2x42wbi80w4v8a.jpg';
import footer_bg from '../../assets/images/4ezbw852t2wrgf27zl1o1qtu7.png';

export const Home = () => {
  return (
    <div className="">
      <HomeNavigationBar />
      <HomeCatagory display="d-block d-lg-none" />

      <div className=" container d-flex flex-column flex-lg-row row-gap-1 align-items-center justify-content-around py-5">
        <div className="home-banner row">
          <h1
            className="  p-0 text-center text-lg-start header-banner col-lg-7 w-100"
            style={{ color: '#595c5e' }}
          >
            Welcome to your professional community
          </h1>
          <div className=" d-flex flex-column row-gap-3">
            <GoogleSignButton />
            <AppleSignInBtn />
            <TermsAndConditions />
            <JoinNow />
          </div>
        </div>
        <img
          className="mainbanner-img col-lg-5"
          src={mainbanner}
          alt=""
        />
      </div>

      <div
        className=" container-fluid py-5  d-lg-flex justify-content-lg-center align-items-lg-center hm-banner"
        style={{ backgroundColor: '#f2f2f0' }}
      >
        <div className=" container row ">
          <div className="col-lg-6">
            <h1 className=" fw-normal">Explore collaborative articles</h1>

            <p
              className=" fw-light py-2"
              style={{ fontSize: '1.2rem' }}
            >
              We’re unlocking community knowledge in a new way. Experts add
              insights directly into each article, started with the help of AI.
            </p>
          </div>

          <div className=" col-lg-6">
            <ul className=" d-flex flex-wrap gap-2 column-gap-2 p-0">
              <li className="">
                <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
                  Marketing
                </button>
              </li>
              <li className="">
                <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
                  Public Administration
                </button>
              </li>
              <li className="">
                <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
                  Healthcare
                </button>
              </li>
              <li className="">
                <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
                  Engineering
                </button>
              </li>
              <li className="">
                <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
                  IT Services
                </button>
              </li>
              <li className="">
                <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
                  Sustainability
                </button>
              </li>
              <li className="">
                <button
                  className=" btn text-primary fw-bold rounded-5 px-3 py-2"
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
        </div>
      </div>

      <div className=" py-5 container-fluid d-flex justify-content-center align-items-lg-center hm-banner-sm">
        <div className=" container row">
          <div className=" col-lg-6">
            <h1 className=" py-3">Find the right job or intership for you</h1>
          </div>

          <ul className=" d-flex flex-wrap gap-2 column-gap-2 p-0 col-lg-6">
            <li className="">
              <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
                Engineering
              </button>
            </li>
            <li className="">
              <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
                Bussiness Developement
              </button>
            </li>
            <li className="">
              <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
                Finance
              </button>
            </li>
            <li className="">
              <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
                Administrative Assiant
              </button>
            </li>
            <li className="">
              <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
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
      </div>

      <div
        className=" container-fluid py-5  d-lg-flex flex-lg-column justify-content-lg-center  align-items-lg-center hm-banner-sm"
        id="hm-small"
        style={{ backgroundColor: '#f1ebe4' }}
      >
        <div className="container d-flex flex-column row-gap-lg-2">
          <div className="">
            <h1 style={{ color: '#b14020' }}>
              Post your job for millions of people to see
            </h1>
          </div>
          <div className="">
            <button
              className=" btn  mt-5 fw-medium rounded-5 px-3 py-2 mt-lg-0"
              style={{
                fontSize: '0.9rem',
                color: '#0965c2',
                border: '1px solid #0965c2',
              }}
            >
              Post a job
            </button>
          </div>
        </div>
      </div>

      <div className=" container-fluid py-5  d-lg-flex justify-content-lg-center  align-items-lg-center hm-banner">
        <div className=" container row ">
          <div className=" col-lg-6">
            <h1 className=" py-3">Discover the best software tools</h1>
            <p
              className=" fw-light py-2"
              style={{ fontSize: '1.2rem' }}
            >
              Connect with buyers who have first-hand experience to find the
              best products for you.
            </p>
          </div>
          <ul className=" d-flex flex-wrap gap-2 column-gap-2 p-0 col-lg-6">
            <li className="">
              <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
                Engineering
              </button>
            </li>
            <li className="">
              <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
                Bussiness Developement
              </button>
            </li>
            <li className="">
              <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
                Finance
              </button>
            </li>
            <li className="">
              <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
                Administrative Assiant
              </button>
            </li>
            <li className="">
              <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
                Retail Associate
              </button>
            </li>
            <li className="">
              <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
                Customer Service
              </button>
            </li>
            <li className="">
              <button
                className=" btn fw-medium rounded-5 px-3 py-2"
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
      </div>

      <div className=" py-5 container d-lg-flex justify-content-lg-center align-items-lg-center hm-banner-md">
        <div className=" col-lg-6">
          <h1 className=" py-3">Keep your mind sharp with games</h1>
          <p
            className=" fw-light py-2"
            style={{ fontSize: '1.2rem' }}
          >
            Take a break and reconnect with your network through quick daily
            games.
          </p>
        </div>
        <ul className=" d-flex flex-wrap gap-2 column-gap-2 p-0 mt-4 col-lg-6">
          <li className="">
            <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
              Pinpoint
            </button>
          </li>
          <li className="">
            <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
              Queens
            </button>
          </li>
          <li className="">
            <button className=" btn border border-black fw-normal rounded-5 px-3 py-2">
              Crossclimb
            </button>
          </li>
        </ul>
      </div>

      <HomeFeatures />

      <div className=" d-lg-flex justify-content-lg-center column-gap-lg-3">
        <div
          className=" py-5 px-3 d-flex flex-column gap-3"
          style={{ height: '50dvh' }}
        >
          <img
            src={connectpeople}
            alt=""
            width={300}
          />
          <h1
            className=" fw-light"
            style={{ fontSize: '1.3rem' }}
          >
            Connect with people who can help{' '}
          </h1>
          <button
            className=" border border-1 py-1 px-2 bg-transparent rounded-5 text-black border-black opacity-75 fw-medium"
            style={{ width: '300px', fontSize: '1rem' }}
          >
            Find people you know
          </button>
        </div>

        <div
          className=" py-5 px-3 d-flex flex-column gap-3"
          style={{ height: '550px' }}
        >
          <img
            src={searchjob}
            alt=""
            width={300}
          />
          <h1 style={{ fontSize: '1.4rem' }}>
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

      <div className=" row py-3">
        <div className=" container gr-light-bg  py-5  col-lg-6 h-100">
          <h1
            className="rd-header fw-normal"
            style={{ fontSize: '1.4rem' }}
          >
            Who is LinkedIn for?
          </h1>
          <p
            className=" fw-normal"
            style={{ fontSize: '0.9rem' }}
          >
            Anyone looking to navigate their professional life.{' '}
          </p>

          <ul className=" list-group">
            {home_data.usage.map((item, index) => {
              return (
                <li
                  className=" list-group-item my-2 py-3 border-0 gr-dark-bg"
                  key={index + item.url}
                >
                  <Link
                    to={item.url}
                    className=" d-flex justify-content-between align-items-center "
                  >
                    <span
                      className=" fw-medium"
                      style={{ fontSize: '0.9rem' }}
                    >
                      {item.description}
                    </span>
                    <i className=" bi bi-arrow-right"></i>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <img
          className=" col-xl-6 d-none d-xl-flex"
          src={footer_banner_logo}
          alt=""
          style={{ width: '600px' }}
        />
      </div>

      <div className="bl-light-bg py-5">
        <div className=" container">
          <iframe
            className=" rounded-3"
            src={'https://youtu.be/IlYUUN8rL_Y'}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '400px', height: '240px' }}
          ></iframe>

          <h1
            className=" m-0 fw-medium mt-4"
            style={{ fontSize: '1.3rem' }}
          >
            In it to chase my dream
          </h1>
          <p
            className=" fw-light py-2"
            style={{ fontSize: '1rem' }}
          >
            Check out Gayatri’s story of finding a new job on LinkedIn{' '}
          </p>
        </div>
      </div>

      <div className=" d-flex flex-column justify-content-center card border-0 position-relative">
        <div className=" container card-title pt-4">
          <h1 className=" fw-light">
            Join your colleagues, classmates, and friends on LinkedIn.
          </h1>
          <button
            className=" btn border border-0 text-white rounded-5"
            style={{
              width: '120px',
              height: '35px',
              backgroundColor: '#0965c2',
              fontWeight: 'bold',
              fontSize: '0.9rem',
            }}
          >
            Get started
          </button>
        </div>
        <div className="card-img d-none d-lg-block">
          <img
            src={footer_bg}
            alt=""
            style={{ width: '100dvw' }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
