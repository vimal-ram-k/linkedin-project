import { Link } from 'react-router-dom';

export const TermsAndConditions = () => {
  return (
    <>
      <p
        className=" text-center text-wrap  my-4 "
        style={{ fontSize: '0.8rem', fontWeight: '200' }}
      >
        By clicking Continue to join or sign in, you agree to LinkedIn’s
        <Link
          to="/"
          className=" support-link ps-1 fw-medium "
        >
          User
        </Link>
        <Link
          to="/"
          className="support-link ps-1  fw-medium"
        >
          Agreement, Privacy Policy
        </Link>
        , and
        <Link
          to="/"
          className="support-link ps-1 fw-medium"
        >
          Cookie Policy
        </Link>
        .
      </p>
    </>
  );
};
