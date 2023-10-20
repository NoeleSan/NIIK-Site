import s from "./authButton.module.css";
import { NavLink } from "react-router-dom";
import Arrow from "../arrow/arrow";
function Auth() {
  return (
    <div className={s.wrap} id="wrap">
      <div className={s.authorization}>
        <NavLink to="/authorization" className={s.auth_text}>
          <div id="auth" className={s.refText}>
            Авторизация
          </div>
        </NavLink>
        <NavLink to="/registration" className={s.reg}>
          <div id="reg" className={s.refText}>
            Регистрация
          </div>
        </NavLink>
      </div>
      <Arrow />
    </div>
  );
}

export default Auth;
