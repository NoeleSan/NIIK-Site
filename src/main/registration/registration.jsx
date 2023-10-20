import s from "./registration.module.css";
import { useForm } from "react-hook-form";
import { signup } from "../../auth.action";
import { connect } from "react-redux";
import { useState } from "react";
import { NavLink, Link, Navigate } from "react-router-dom";
import { map } from "jquery";

const Registration = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    re_password: "",
  });
  const { email, name, phone, re_password, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (password === re_password) {
      signup(name, email, phone, password, re_password);
      setAccountCreated(true);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  if (accountCreated) {
    return <Navigate to="/" />;
  }
  return (
    <div className={s.wrapper}>
      <div className={s.auth}>
        <img src="./img/loginImg.png" alt="niik" />
        <h3>Регистрация</h3>
        <form onSubmit={(e) => onSubmit(e)} className={s.form}>
          <div className={s.block}>
            <label className={s.text_field__label} htmlFor="email">
              E-mail
            </label>
            <div
              className={`${s.text_field__icon} ${s.text_field__icon_email}`}
            >
              <input
                className={s.text_field__input}
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Email"
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>
          <div className={s.block}>
            <label className={s.text_field__label} htmlFor="name">
              ФИО
            </label>
            <div
              className={`${s.text_field__icon} ${s.text_field__icon_email}`}
            >
              <input
                className={s.text_field__input}
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="ФИО"
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>
          <div className={s.block}>
            <label className={s.text_field__label} htmlFor="phone">
              Телефон
            </label>
            <div className={`${s.text_field__icon} ${s.text_field__icon_tel}`}>
              <input
                className={s.text_field__input}
                type="tel"
                name="phone"
                id="phone"
                value={phone}
                placeholder="Номер телефона"
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>
          <div className={s.block}>
            <label className={s.text_field__label} htmlFor="password">
              Пароль
            </label>
            <div
              className={`${s.text_field__icon} ${s.text_field__icon_password}`}
            >
              <input
                className={s.text_field__input}
                type="password"
                name="password"
                id="password"
                value={String(password)}
                placeholder="Password"
                onChange={(e) => onChange(e)}
                minLength="6"
                required
              />
            </div>
          </div>
          <div className={s.block}>
            <label className={s.text_field__label} htmlFor="re_password">
              Повторите пароль
            </label>
            <div
              className={`${s.text_field__icon} ${s.text_field__icon_password}`}
            >
              <input
                className={s.text_field__input}
                type="password"
                name="re_password"
                id="re_password"
                value={String(re_password)}
                placeholder="Password repeat"
                onChange={(e) => onChange(e)}
                minLength="6"
                required
              />
            </div>
          </div>
          <label htmlFor="buttonAuth" className={s.join}>
            Зарегистрироваться
          </label>
          <button
            type="submit"
            id="buttonAuth"
            className={s.hideButton}
          ></button>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { signup })(Registration);
