import s from ".././authorization.module.css";
import { useForm } from "react-hook-form";
import { NavLink,Link, Navigate, useParams } from "react-router-dom";
import {useState} from "react";
import {connect} from "react-redux";
import {reset_password_confirm} from '../../../auth.action'

const ConfirmPassword = ({reset_password_confirm})=> {
  const [requestSent,setRequestSent] =useState(false);
  const params = useParams();
  const[formData, setFormData]=useState({
    new_password: "",
    re_new_password: "",
  });
  const {new_password,re_new_password} = formData;
  const onChange = e => setFormData({... formData,[e.target.name]:e.target.value});

  const onSubmit = e =>{
    e.preventDefault()
    const uid = params.uid;
    const token = params.token;
    reset_password_confirm(uid,token,new_password,re_new_password);
    setRequestSent(true);
  };

  if (requestSent){
    return <Navigate to="/" />;
  }

return (
  <div className={s.wrapper}>
    <div className={s.auth}>
      <h3>Изменить пароль</h3>

      <form onSubmit={e=>onSubmit(e)} className={s.form}>


        <div className={s.block}>
            <label className={s.text_field__label} htmlFor="password">
              Новый Пароль
            </label>
            <div
              className={`${s.text_field__icon} ${s.text_field__icon_password}`}
            >
              <input
                className={s.text_field__input}
                type="password"
                name="new_password"
                id="new_password"
                placeholder="Новый Пароль"
                value={new_password}
                onChange={e=>onChange(e)}
                minLength='6'
                required
              />
            </div>
          </div>


          <div className={s.block}>
            <label className={s.text_field__label} htmlFor="password">
              Подтвердить пароль
            </label>
            <div
              className={`${s.text_field__icon} ${s.text_field__icon_password}`}
            >
              <input
                className={s.text_field__input}
                type="password"
                name="re_new_password"
                id="re_new_password"
                placeholder="Подтвердите Пароль"
                value={re_new_password}
                onChange={e=>onChange(e)}
                minLength='6'
                required
              />
            </div>
          </div>


        <label htmlFor="buttonAuth" className={s.join}>
            Изменить
          </label>
        <button type="submit" id="buttonAuth" className={s.hideButton}>
        </button>
        
      </form>
    </div>
  </div>
);
};

export default connect(null,{reset_password_confirm})(ConfirmPassword);