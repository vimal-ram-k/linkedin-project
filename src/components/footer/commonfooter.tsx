import { Link } from 'react-router-dom';
import footer_data from './footer.json';
export const CommonFooter = () => {
  return (
    <section className=" bg-white py-3">
      <ul className=" row m-0 p-0 d-md-flex justify-content-md-center column-gap-md-1 flex-wrap">
        <li className=" col-6 col-md-auto">
          <img
            src="/linkedin-logo-3801732491.png"
            alt=""
            className=" "
            width={60}
          />
        </li>
        {footer_data['Persona terms'].map((item, index) => {
          return (
            <Link
              to="/"
              className=" col-6 col-md-auto"
            >
              <li
                key={item + index}
                className=" fw-medium  py-2  text-nowrap footer-link-dark "
                style={{ fontSize: '0.6rem' }}
              >
                {item}
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};
