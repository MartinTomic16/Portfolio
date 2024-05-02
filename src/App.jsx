import { Navbar } from "./components";
import {
  Profile,
  About,
  Experience,
  Projects,
  Contact,
  Footer,
} from "./sections";

const App = () => (
  <>
    <Navbar />
    <Profile />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </>
);

export default App;
