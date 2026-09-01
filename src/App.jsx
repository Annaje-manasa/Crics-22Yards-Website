import { useEffect, useState } from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CoachingPage from './CoachingPage';
import ContactUs from './ContactUs';
import LaneRentals from './LaneRentals';
import SpecialEvents from './SpecialEvents';
import SummerCamp from './SummerCamp';
import RegistrationPage from './RegistrationPage';
import RegistrationFormPage from './RegistrationFormPage';

export default function App() {
  const getPage = () => {
    if (window.location.hash === '#about') return 'about';
    if (window.location.hash === '#coaching') return 'coaching';
    if (window.location.hash === '#contact') return 'contact';
    if (window.location.hash === '#lane-rentals') return 'lane-rentals';
    if (window.location.hash === '#special-events') return 'special-events';
    if (window.location.hash === '#summer-camp') return 'summer-camp';
    if (window.location.hash === '#registration') return 'registration';
    if (window.location.hash === '#registration-form') return 'registration-form';
    return 'home';
  };

  const [page, setPage] = useState(getPage);

  const resetTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    resetTop();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPage());
      resetTop();
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    resetTop();
  }, [page]);

  if (page === 'about') return <AboutPage />;
  if (page === 'coaching') return <CoachingPage />;
  if (page === 'contact') return <ContactUs />;
  if (page === 'lane-rentals') return <LaneRentals />;
  if (page === 'special-events') return <SpecialEvents />;
  if (page === 'summer-camp') return <SummerCamp />;
  if (page === 'registration') return <RegistrationPage />;
  if (page === 'registration-form') return <RegistrationFormPage />;
  return <HomePage />;
}
