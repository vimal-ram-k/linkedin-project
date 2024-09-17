import { Link } from 'react-router-dom';

export const TermsAndConditions = () => {
  return (
    <>
      <p
        className=" text-center opacity-75 text-wrap  mt-2 "
        style={{ fontSize: '0.7rem' }}
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
    </>
  );
};
