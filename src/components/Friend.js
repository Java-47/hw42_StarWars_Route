import React, { useContext } from "react";
import style from "../css_modules/borderRound.module.css";
import { characters } from "../utils/constants";
import { HeroContext } from "../utils/context";
import { navItems } from "../utils/constants";
const Friend = ({ friend, number }) => {
  const { changeHero } = useContext(HeroContext);
  let friendStyle = "col-4 p-1 ";

  if (number === 7) {
    friendStyle += style.bottomLeft;
  }
  if (number === 9) {
    friendStyle += style.bottomRight;
  }
  return (
    <img
      onClick={() => {
        changeHero(friend);
        navItems[0].route = `home/${friend}`;
        navItems[1].route = `about_me/${friend}`;
        window.location.hash = `#/${navItems[0].route}`;
      }}
      className={friendStyle}
      src={characters[friend].img}
      alt={characters[friend].name}
    />
  );
};

export default Friend;
