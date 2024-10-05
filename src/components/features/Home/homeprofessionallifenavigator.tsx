import home_data from '../../../pages/home/home.json';
import footer_banner_logo from '../../../assets/images/eghb2zc0p5s2x42wbi80w4v8a.jpg';
import { Link } from 'react-router-dom';

export const HomeProfessionalLifeNavigator = () => {
  return (
    <div className=" row py-3 ps-3">
      <div className=" container  gr-light-bg  py-5  col-lg-6 h-100">
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
          Anyone looking to navigate their professional life.
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
  );
};
