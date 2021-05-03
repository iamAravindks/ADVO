import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./components/layout/GlobalStyle";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Navbar from "./components/layout/Navbar/Navbar";
import SideBar from "./components/layout/Navbar/SideBar";
import Footer from "./components/layout/Footer/Footer";
import Hero from "./components/layout/Slider/Hero";
import { SliderData } from "./Data/SliderData";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route
            exact
            path='/spots'
            component={(props) => <Hero slides={SliderData} />}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
