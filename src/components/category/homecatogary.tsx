import { Link } from 'react-router-dom';
import '../../assets/styles/components/category/homecatogary.css';

type HomeCatagoryType = {
  display: 'd-none d-lg-inline' | 'd-block d-lg-none';
};

export const HomeCatagory = (props: HomeCatagoryType) => {
  return (
    <nav className={`${props.display}`}>
<<<<<<< HEAD
<<<<<<< HEAD
      <ul className=" container d-flex justify-content-lg-around justify-content-around align-items-center  column-gap-lg-5 p-0 py-2 py-lg-0 m-lg-0">
=======
      <ul className=" d-flex justify-content-around align-items-center column-gap-md-4 column-gap-lg-5 p-0 py-2 py-lg-0 m-lg-0">
>>>>>>> 8a7f19c (Design responsive landing page navigationbar layout)
=======
      <ul className=" container d-flex justify-content-lg-around justify-content-around align-items-center  column-gap-lg-5 p-0 py-2 py-lg-0 m-lg-0">
>>>>>>> 84b0626 (Fixed category component gap issue)
        <li className=" list-unstyled">
          <Link
            to="/guest/articles"
            className=" link "
          >
            <i className=" bi bi-newspaper"></i>
            <span className="fw-normal">Articles</span>
          </Link>
        </li>

        <li className=" list-unstyled">
          <Link
            to="/guest/people"
            className=" link "
          >
            <i className=" bi bi-people-fill"></i>
            <span className="  fw-normal">People</span>
          </Link>
        </li>

        <li className=" list-unstyled">
          <Link
            to="/guest/learning"
            className=" link "
          >
            <i className=" bi bi-play-btn"></i>
            <span className="  fw-normal">Learning</span>
          </Link>
        </li>

        <li className=" list-unstyled">
          <Link
            to="/guest/jobs"
            className=" link "
          >
            <i className=" bi bi-bag-fill"></i>
            <span className="  fw-normal">Jobs</span>
          </Link>
        </li>

        <li className=" list-unstyled">
          <Link
            to="/guest/games"
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
