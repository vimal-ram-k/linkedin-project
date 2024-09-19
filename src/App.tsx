import { useEffect } from 'react';
import { ProfileCard } from './components/profilecard/profilecard';
import { AddPostCard } from './components/addpostcard/addpostcard';
import { NewsCard } from './components/newscard/newscard';
import { NavigationBar } from './components/navigationbar/navigatiionbar';

function App() {
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme : dark)');

    const setTheme = () => {
      if (isDark.matches) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    };
    isDark.addEventListener('change', setTheme);

    return () => {
      isDark.addEventListener('change', setTheme);
    };
  }, []);

  return (
    <div
      className="main m-auto bg-white "
      aria-labelledby="main"
    >
      <NavigationBar />
      <div className="row d-flex justify-content-center gap-sm-3">
        <ProfileCard />
        <AddPostCard />
        <NewsCard />
      </div>
    </div>
  );
}

export default App;
