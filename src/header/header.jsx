import Auth from "./authButton/authButton";
import s from "./header.module.css";
import a from "./authButton/authButton.module.css";
import Logoname from "./logoName/logoname";
import ProfileButton from "./profileButton/profileButton";
import Navigation from "../main/navigation/navigation";
import {connect}  from 'react-redux';

const Header= ({isAuthenticated}) => {
  let heigth;
  let header;
  let wrapper;
  let arrow;
  let navigation;
  let k;

  const load = function () {
    header = document.querySelector("#header");
    wrapper = document.querySelector("#wrapper");
    arrow = document.querySelector("#arrow");
    navigation = document.querySelector("#navigation");
    k = wrapper.scrollHeight;
  };
  function top() {
    arrow.onclick = () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  }

  window.addEventListener("scroll", function () {
    if (header == null || wrapper == null || arrow == null) {
      load();
      top();
    }
    heigth = window.pageYOffset;
    heigth > k + 180 ? add() : del();
  });

  function add() {
    header.classList.add(s.header__fixed);
    wrapper.classList.add(s.wrapper__change);
    wrapper.classList.remove(s.wrapper);
    arrow.classList.add(a.activeBlockArrow);
    arrow.classList.remove(a.blockArrow);
    navigation.classList.remove(s.navigation);
    navigation.classList.add(s.inactiveNavigation);
  }
  function del() {
    header.classList.remove(s.header__fixed);
    wrapper.classList.remove(s.wrapper__change);
    wrapper.classList.add(s.wrapper);
    arrow.classList.remove(a.activeBlockArrow);
    arrow.classList.add(a.blockArrow);
    navigation.classList.remove(s.inactiveNavigation);
    navigation.classList.add(s.navigation);
  }

  return (
    <header id="header" className={s.header__main}>
      <div className={s.wrapper} id="wrapper">
        <div className={s.objects}>
          <Logoname />
          <hr className={s.hrLine} />
          {isAuthenticated? <ProfileButton /> : <Auth />}
        </div>
      </div>

      <div className={s.navigation} id="navigation">
        <hr />
        <Navigation />
      </div>
    </header>
  );
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Header);
