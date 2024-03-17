import Nav from "./NavBar/Nav.jsx";
import HomePage from "./Home/Home.jsx";
import AboutPage from "./About/About.jsx";
import Skills from "./Skills/Skills.jsx";
import Project from "./Projects/Projects.jsx";
import Contact from "./Contact/Contact.jsx";
import Footer from "./Footer/Footer.jsx";
import GoToTop from "./GoToTopButton/GoToTop.jsx";

function Information() {
  return (
    <main>
      <Nav />
      <HomePage />
      <AboutPage />
      <Skills />
      <Project />
      <Contact />
      <GoToTop />
      <Footer />
    </main>
  );
}
export default Information;
