import s from "./navigation.module.css";
import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <div className={s.wrapper}>
      <NavLink to="/" className={s.buttonPage}>
        Главная
      </NavLink>
      <NavLink to="/projects" className={s.buttonPage}>
        Проекты
      </NavLink>
      <NavLink to="/history" className={s.buttonPage}>
        История
      </NavLink>

      <NavLink to="/conferencion" className={s.buttonPage}>
        Конференции
      </NavLink>

      <NavLink to="/contacts" className={s.buttonPage}>
        Контакты
      </NavLink>

      <NavLink to="/toDonikk" className={s.buttonPage}>
        Деятельность
      </NavLink>
    </div>
  );
}
export default Navigation;
