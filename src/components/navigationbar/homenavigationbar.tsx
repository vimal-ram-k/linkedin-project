import { HomeCatagory } from '../category/homecatogary';
import { JoinNowButton, SigninButton } from '../buttons/Buttons';
import { MainLogo } from '../logo/mainlogo';

export const HomeNavigationBar = () => {
  return (
    <header className=" container py-2 d-flex justify-content-lg-around justify-content-between align-items-center">
      <MainLogo />
      <ul className=" d-flex column-gap-3 align-items-center p-0 m-0">
        <li>
          <HomeCatagory display="d-none d-lg-inline" />
        </li>
        <li>
          <nav className=" d-flex column-gap-1 column-gap-lg-2">
            <JoinNowButton />
            <SigninButton />
          </nav>
        </li>
      </ul>
    </header>
  );
};
