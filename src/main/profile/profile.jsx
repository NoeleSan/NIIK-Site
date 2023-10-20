import s from "./profile.module.css";
import { NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Orders from "./orders/orders";
import Account from "./account/account";
import Table1 from "./table1/table1.jsx";
import Table2 from "./table2/table2.jsx";
import Table3 from "./table3/table3.jsx";
import Table4 from "./table4/table4";
import { checkAthenticated, load_user } from "../../auth.action";
import { connect } from "react-redux";
import OrderAccess from "./orders/profileAccess/orderAccess";
import Table5 from "./table5/table5";

const Profile = ({is_staff,isAuthenticated}) => {

  const a=is_staff


  if (isAuthenticated == false) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.wrapper}>
      <nav className={s.navBlock}>
        <NavLink
          to="account"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Аккаунт
        </NavLink>
        <NavLink
          to="orders"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Проекты
        </NavLink>
        {(a)? (
          <div className={s.Navlist}>
            <NavLink
              to="table1"
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              Менеджеры
            </NavLink>
            <NavLink
              to="table2"
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              Товары
            </NavLink>
            <NavLink
              to="table3"
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              Заказы
            </NavLink>
            <NavLink
              to="table5"
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              Подтверждение заказа
            </NavLink>
            <NavLink
              to="table4"
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              Аккаунты
            </NavLink>
          </div>
        ) : null}
      </nav>
      <section className={s.content}>
        <Routes>
          <Route path="account" element={<Account />}></Route>
          <Route path="orders/*" element={<Orders />}></Route>
          <Route path="table1" element={<Table1 />}></Route>
          <Route path="table2" element={<Table2 />}></Route>
          <Route path="table3" element={<Table3 />}></Route>
          <Route path="table4" element={<Table4 />}></Route>
          <Route path="table5" element={<Table5 />}></Route>
          <Route path="/orders/orderAccess" element={<OrderAccess />}></Route>
        </Routes>
      </section>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  is_staff: state.auth.is_staff
});
export default connect(mapStateToProps, { checkAthenticated, load_user })(Profile);
