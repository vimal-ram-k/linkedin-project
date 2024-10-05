import { Link } from 'react-router-dom';

export const TermsAndConditions = () => {
  return (
    <div className="">
      <p
        className=" text-center"
        style={{ fontSize: '0.8rem', fontWeight: '200' }}
      >
        By clicking Continue to join or sign in, you agree to LinkedIn’s
        <Link
          to="/"
          className=" support-link ps-1 fw-medium d-inline "
        >
          User
        </Link>
        <Link
          to="/"
          className="support-link  fw-medium d-inline"
        >
          Agreement, Privacy Policy
        </Link>
        , and
        <Link
          to="/"
          className="support-link fw-medium d-inline ps-1"
        >
          Cookie Policy
        </Link>
        .
      </p>
    </div>
  );
};
