import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import React, { useEffect, useState } from "react";
import { defaultHero, navItems } from "./utils/constants";
import { HeroContext } from "./utils/context";
import { friends } from "./utils/constants";


const App = (props) => {
  const getItemByRoute = () => {


    const route = window.location.hash.substring(2);
    const page = navItems.find((item) => item.route === route);
    const cur_page = route.split("/")[0];
    if (cur_page === "about_me") {
      return navItems[1];
    } else {
      return page ?? navItems[0];
    }
  };

  const routeHero = () => {
    const route = window.location.hash.substring(2);
    const routeHero = route.split("/")[1];
    if(friends.find(item => item === routeHero)){
      return routeHero;}
    else
      return defaultHero;
  };

  const [hero, setHero] = useState(routeHero());
  const [currentPage, setCurrentPage] = useState(getItemByRoute());
  navItems[0].route = `home/${hero}`;
  navItems[1].route = `about_me/${hero}`;

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      const page = getItemByRoute();
      setCurrentPage(page);
      setHero(routeHero());
    });
  }, []);

  return (
  <div className="container-fluid">
      <Header hero={hero} />
      <HeroContext.Provider
        value={{
          hero,
          changeHero: setHero,
        }}
      >
        <Main currentPage={currentPage} />
      </HeroContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
