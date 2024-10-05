import connectpeople from '../../../assets/images/43h6n82li4xu0q23s8jqizk6j.svg';
import searchjob from '../../../assets/images/1dhh8rr3wohexkaya6jhn2y8j.svg';

export const HomeSubFeatures = () => {
  return (
    <div className=" d-lg-flex justify-content-lg-center column-gap-lg-3">
      <div
        className=" py-5 px-3 d-flex flex-column gap-3"
        style={{ height: '50dvh' }}
      >
        <img
          src={connectpeople}
          alt=""
          width={250}
        />
        <h1
          className=" fw-light"
          style={{ fontSize: '1.3rem' }}
        >
          Connect with people who can help{' '}
        </h1>
        <button
          className=" border border-1 py-1 px-2 bg-transparent rounded-5 text-black border-black opacity-75 fw-medium"
          style={{ width: '200px', fontSize: '0.9rem' }}
        >
          Find people you know
        </button>
      </div>

      <div
        className=" py-5 px-3 d-flex flex-column gap-4"
        style={{ height: '550px' }}
      >
        <img
          src={searchjob}
          alt=""
          width={250}
          className=" py-2"
        />
        <h1
          className=" fs-normal"
          style={{ fontSize: '1.2rem' }}
        >
          Learn the skills you need to succeed
        </h1>
        <section className=" border rounded-2 px-3 position-relative py-3">
          <div
            className=" position-absolute opacity-75 d-flex justify-content-between"
            style={{ width: '320px' }}
          >
            <h1
              className=""
              style={{ fontSize: '1rem' }}
            >
              Choose a topic learn about
            </h1>
            <i className=" bi bi-arrow-bar-down text-primary "></i>
          </div>
          <select
            name=""
            id=""
            className=" border-1 bg-transparent border border-0 opacity-0"
          >
            <option
              value="IT"
              disabled
              hidden
            >
              Choose a topic to learn about
            </option>
            <option value="IT">Choose a topic to learn about</option>
            <option value="IT">Choose a topic to learn about</option>
          </select>
        </section>
      </div>
    </div>
  );
};
