import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Rest from './components/Rest.jsx';
import Week from './components/Week.jsx';
import BeforeAfter from './components/BeforeAfter.jsx';
import Benefits from './components/Benefits.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

import Privacy from './pages/Privacy.jsx';
import LegalNotice from './pages/Notice.jsx';
import Cookies from './pages/Cookies.jsx';

function Landing() {
  return (
    <>
      <Hero />
      <main>
        <HowItWorks />
        <Rest />
        <Week />
        <BeforeAfter />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  switch (path) {
    case '/privacidad':
      return <Privacy />;
    case '/aviso-legal':
      return <LegalNotice />;
    case '/cookies':
      return <Cookies />;
    default:
      return <Landing />;
  }
}