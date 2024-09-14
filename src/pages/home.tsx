import linkedinlogo from '../assets/icons8-image-48.png';
export const Home = () => {
  return (
    <div>
      <header className=" container py-1 d-flex justify-content-between">
        <img
          src="/linkedin-svgrepo-com.svg"
          className="logo"
          aria-describedby="logo"
          alt=""
          width={40}
        />
        <nav className=" d-flex column-gap-2">
          <button
            className=" btn border border-primary rounded-5 text-primary fw-medium fs-6"
            style={{ width: '120px', height: '50px' }}
          >
            Sign in
          </button>
          <button
            className=" btn border bg-primary text-white rounded-5 fw-medium fs-6"
            style={{ width: '120px', height: '50px' }}
          >
            Join now
          </button>
        </nav>
      </header>
    </div>
  );
};
