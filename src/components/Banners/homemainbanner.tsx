import mainbanner from '../../assets/images/AAYAAgSrAAgAAQAAAAAAAGM6w-NyPk-_SVikYiCJ6V3Z-Q.png';
import {
  GoogleSignButton,
  EmailSigninButton,
  JoinNowButton,
} from '../buttons/Buttons';
import { TermsAndConditions } from '../termsandcondition/termsandconditions';

export const HomeMainBanner = () => {
  return (
    <div className=" container d-flex flex-column flex-lg-row row-gap-1 align-items-center justify-content-around py-3">
      <div className="home-banner row">
        <h1
          className="  p-0 text-center text-lg-start header-banner col-lg-7 w-100 py-4"
          style={{ color: '#595c5e' }}
        >
          Welcome to your professional community
        </h1>
        <div className=" d-flex flex-column row-gap-3 pt-2">
          <GoogleSignButton />
          <EmailSigninButton />
          <TermsAndConditions />
          <section className=" d-flex align-items-center justify-content-center">
            <h1 className=" fw-light fs-6 d-inline m-0">New to Linkedin?</h1>
            <JoinNowButton />
          </section>
        </div>
      </div>
      <img
        className="mainbanner-img col-lg-5"
        src={mainbanner}
        alt=""
      />
    </div>
  );
};
