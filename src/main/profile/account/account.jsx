import s from "./account.module.css";
import {connect} from "react-redux"
import { Routes, Route, Navigate } from "react-router-dom";
import {logout} from '../../../auth.action'
function Account({isAuthenticated,logout}) {

  if (localStorage.getItem('access')==null){
    return <Navigate to="/" />;
  }
  return (
    <div className={s.wrapper}>
      <div className={s.info}>{localStorage.getItem('name')}</div>
      <div className={s.info}>{localStorage.getItem('phone')}</div>
      <div className={s.info}>{localStorage.getItem('email')}</div>
      <button className={`${s.info} ${s.button}`} onClick={logout}>
        Выйти из профиля
      </button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect (mapStateToProps,{logout})(Account);
