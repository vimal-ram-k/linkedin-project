import { Link } from 'react-router-dom';

export const HomeCatagory = () => {
  return (
    <nav>
      <ul className=" d-flex justify-content-around p-0 py-2">
        <li className=" list-unstyled">
          <Link
            to="/"
            className=" text-decoration-none d-flex flex-column align-items-center "
          >
            <i className=" bi bi-newspaper text-black fs-3 opacity-75"></i>
            <span className=" text-black opacity-75 fw-normal">Articles</span>
          </Link>
        </li>

        <li className=" list-unstyled">
          <Link
            to="/"
            className=" text-decoration-none d-flex flex-column align-items-center "
          >
            <i className=" bi bi-people-fill text-black fs-3 opacity-75"></i>
            <span className=" text-black opacity-75 fw-normal">People</span>
          </Link>
        </li>

        <li className=" list-unstyled">
          <Link
            to="/"
            className=" text-decoration-none d-flex flex-column align-items-center "
          >
            <i className=" bi bi-play-btn text-black fs-3 opacity-75"></i>
            <span className=" text-black opacity-75 fw-normal">Learning</span>
          </Link>
        </li>

        <li className=" list-unstyled">
          <Link
            to="/"
            className=" text-decoration-none d-flex flex-column align-items-center "
          >
            <i className=" bi bi-bag-fill text-black fs-3 opacity-75"></i>
            <span className=" text-black opacity-75 fw-normal">Jobs</span>
          </Link>
        </li>

        <li className=" list-unstyled">
          <Link
            to="/"
            className=" text-decoration-none d-flex flex-column align-items-center "
          >
            <i className=" bi bi-puzzle-fill text-black fs-3 opacity-75"></i>
            <span className=" text-black opacity-75 fw-normal">Games</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
