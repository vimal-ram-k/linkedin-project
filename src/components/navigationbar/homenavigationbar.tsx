import { Link } from 'react-router-dom';

export const HomeNavigationBar = () => {
  return (
    <header className=" container py-2 d-flex justify-content-between align-items-center">
      <img
        src="/linkedin-svgrepo-com.svg"
        className="logo"
        aria-describedby="logo"
        alt="Linkedin Logo"
        style={{ width: '30px' }}
      />
      <nav className=" d-flex column-gap-2">
        <button
          className=" btn rounded-5 fs-6"
          style={{
            width: '100px',
            height: '50px',
            color: '#0965c2',
            border: '1px solid #0965c2',
            fontWeight: 'bold',
          }}
        >
          <Link to="/login/signin">Sign in</Link>
        </button>
        <button
          className=" btn border text-white rounded-5"
          style={{
            width: '120px',
            height: '50px',
            backgroundColor: '#0965c2',
            fontWeight: 'bold',
            fontSize: '0.9rem',
          }}
        >
          Join now
        </button>
      </nav>
    </header>
  );
};
