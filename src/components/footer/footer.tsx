import { Link } from 'react-router-dom';
import footer_data from './footer.json';
import { CommonFooter } from './commonfooter';
export const Footer = () => {
  return (
    <div
      className=" container-fluid m-0 p-0 row  pt-4"
      style={{ backgroundColor: '#f2f2f0' }}
    >
      <div className=" col-lg-3">
        <img
          src="/linkedin-logo-3801732491.png"
          alt=""
          className=" my-4 ps-3"
          width={200}
          height={40}
        />
      </div>

      <section className=" ps-3 col-lg-2">
        <h1
          className=" fs-6"
          style={{ fontSize: '0.9rem' }}
        >
          General
        </h1>
        <ul className=" p-0 ">
          {footer_data.General.map((item, index) => {
            return (
              <Link
                to={`/guest/${item}`}
                className="footer-link"
              >
                <li
                  className=" fw-medium  py-1"
                  key={item + index}
                  style={{ fontSize: '0.8rem' }}
                >
                  {item}
                </li>
              </Link>
            );
          })}
        </ul>
      </section>

      <section className="ps-3 col-lg-2">
        <h1
          className=""
          style={{ fontSize: '0.9rem' }}
        >
          Browse LinkedIn
        </h1>
        <ul className=" p-0 col-lg-3">
          {footer_data['Browse LinkedIn'].map((item, index) => {
            return (
              <Link
                to={`/guest/${item}`}
                className="footer-link"
              >
                <li
                  key={item + index}
                  className=" fw-medium  py-1"
                  style={{ fontSize: '0.8rem' }}
                >
                  {item}
                </li>
              </Link>
            );
          })}
        </ul>
      </section>

      <section className="ps-3 col-lg-2">
        <h1
          className=""
          style={{ fontSize: '0.9rem' }}
        >
          Business Solutions
        </h1>
        <ul className=" p-0">
          {footer_data['Business Solutions'].map((item, index) => {
            return (
              <Link
                to={`/guest/${item}`}
                className="footer-link"
              >
                <li
                  key={item + index}
                  className=" fw-medium  py-1"
                  style={{ fontSize: '0.8rem' }}
                >
                  {item}
                </li>
              </Link>
            );
          })}
        </ul>
      </section>

      <section className="ps-3 col-lg-2">
        <h1
          className=""
          style={{ fontSize: '0.9rem' }}
        >
          Directories
        </h1>
        <ul className=" p-0">
          {footer_data['Directories'].map((item, index) => {
            return (
              <Link
                to={`/guest/${item}`}
                className="footer-link"
              >
                <li
                  key={item + index}
                  className=" fw-medium  py-1"
                  style={{ fontSize: '0.8rem' }}
                >
                  {item}
                </li>
              </Link>
            );
          })}
        </ul>
      </section>

      <CommonFooter />
    </div>
  );
};
