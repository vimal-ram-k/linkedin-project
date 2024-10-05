import { GetStartedButton } from '../../buttons/Buttons';
import footer_bg from '../../../assets/images/4ezbw852t2wrgf27zl1o1qtu7.png';

export const HomeFooterHeader = () => {
  return (
    <div className=" d-flex flex-column justify-content-center card border-0 position-relative">
      <div className=" container card-title pt-4">
        <h1
          className=" fw-normal"
          style={{ fontSize: '1.2rem' }}
        >
          Join your colleagues, classmates, and friends on LinkedIn.
        </h1>
        <GetStartedButton />
      </div>
      <div className="card-img d-none d-lg-block">
        <img
          src={footer_bg}
          alt=""
          style={{ width: '100dvw' }}
        />
      </div>
    </div>
  );
};
