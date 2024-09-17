import { Link } from 'react-router-dom';
import '../../assets/styles/components/category/homecatogary.css';

export const HomeCatagory = () => {
  return (
    <nav>
      <ul className=" d-flex justify-content-around p-0 py-2">
        <li className=" list-unstyled">
          <Link
            to="/"
            className=" link "
          >
            <i className=" bi bi-newspaper"></i>
            <span className="fw-normal">Articles</span>
          </Link>
        </li>

        <li className=" list-unstyled">
          <Link
            to="/"
            className=" link "
          >
            <i className=" bi bi-people-fill"></i>
            <span className="  fw-normal">People</span>
          </Link>
        </li>

        <li className=" list-unstyled">
          <Link
            to="/"
            className=" link "
          >
            <i className=" bi bi-play-btn"></i>
            <span className="  fw-normal">Learning</span>
          </Link>
        </li>

        <li className=" list-unstyled">
          <Link
            to="/"
            className=" link "
          >
            <i className=" bi bi-bag-fill"></i>
            <span className="  fw-normal">Jobs</span>
          </Link>
        </li>

        <li className=" list-unstyled">
          <Link
            to="/"
            className=" link "
          >
            <i className=" bi bi-puzzle-fill"></i>
            <span className="  fw-normal">Games</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
