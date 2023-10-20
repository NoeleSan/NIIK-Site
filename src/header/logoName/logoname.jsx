import s from "./logoname.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Logoname() {
  let logo;
  let text;
  let heigth;
  let k;
  let q;
  let wrapper;
  let hideText;

  const load = function () {
    logo = document.querySelector("#logoMain");
    text = document.querySelector("#textLogo");
    wrapper = document.querySelector("#wrapper1");
    hideText = document.querySelector("#hideText");
    k = wrapper.scrollHeight;
    q = window.innerWidth;
  };

  window.addEventListener("scroll", function () {
    if (text == null || logo == null) {
      load();
    }

    heigth = window.pageYOffset;
    heigth > k ? add() : del();
  });

  const add = function () {
    if (q < 390) {
      logo.classList.remove(s.logo);
      logo.classList.add(s.textHide);
    } else {
      logo.classList.remove(s.logo);
      logo.classList.add(s.logo__change);
    }
    wrapper.classList.remove(s.wrapper);
    wrapper.classList.add(s.wrapper__change);
    text.classList.remove(s.text);
    text.classList.add(s.textHide);
    hideText.classList.remove(s.textHide);
    hideText.classList.add(s.text);
  };

  const del = function () {
    if (q < 390) {
      logo.classList.remove(s.textHide);
      logo.classList.add(s.logo);
    } else {
      logo.classList.add(s.logo);
      logo.classList.remove(s.logo__change);
    }
    wrapper.classList.remove(s.wrapper__change);
    wrapper.classList.add(s.wrapper);
    text.classList.add(s.text);
    text.classList.remove(s.textHide);

    hideText.classList.remove(s.text);
    hideText.classList.add(s.textHide);
  };

  return (
    <NavLink to="/">
      <div className={s.wrapper} id="wrapper1">
        <div className={s.logoCenter}>
          <img
            id="logoMain"
            className={s.logo}
            src="./img/Logo.png"
            alt="logo"
          />

          <h1 className={s.text} id="textLogo">
            Научно-исследовательский и проектный институт карбамида
          </h1>
          <h1 id="hideText" className={s.textHide}>
            НИИК
          </h1>
        </div>
      </div>
    </NavLink>
  );
}

export default Logoname;
