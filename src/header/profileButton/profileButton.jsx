import s from "./ProfileButton.module.css";
import { NavLink } from "react-router-dom";
import Arrow from "../arrow/arrow";

function ProfileButton() {
  return (
    <div className={s.wrapper}>
      <NavLink to="/profile">
        <div className={s.info}>
          <img src="./img/profile.png" alt="profile" className={s.imgProfile} />
          <h3>Личный кабинет</h3>
        </div>
      </NavLink>
      <Arrow />
    </div>
  );
}

export default ProfileButton;
