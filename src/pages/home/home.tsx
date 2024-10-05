import { HomeNavigationBar } from '../../components/navigationbar/homenavigationbar';
import { HomeFeatures } from '../../components/home/features/homefeatures';
import { Footer } from '../../components/footer/footer';
import { HomeMainBanner } from '../../components/Banners/homemainbanner';
import { HomeMainFeatures } from '../../components/features/Home/homemainfeatures';
import { HomeSubFeatures } from '../../components/features/Home/homesubfeatures';
import { HomeProfessionalLifeNavigator } from '../../components/features/Home/homeprofessionallifenavigator';
import { ChaseMyDream } from '../../components/features/Home/chasemydream';
import { HomeFooterHeader } from '../../components/features/Home/homefooterheader';

export const Home = () => {
  return (
    <>
      <HomeNavigationBar />
      <HomeMainBanner />
      <HomeMainFeatures />
      <HomeFeatures />
      <HomeSubFeatures />
      <HomeProfessionalLifeNavigator />
      <ChaseMyDream />
      <HomeFooterHeader />
      <Footer />
    </>
  );
};
