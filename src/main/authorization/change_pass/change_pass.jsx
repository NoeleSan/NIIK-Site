
import s from ".././authorization.module.css";
import { useForm } from "react-hook-form";
import { NavLink,Link, Navigate } from "react-router-dom";
import {useState} from "react";
import {connect} from "react-redux";
import {reset_password} from '../../../auth.action'

const ResetPassword = ({reset_password})=> {
  const [requestSent,setRequestSent] =useState(false);

  const[formData, setFormData]=useState({
    email: "",
  });
  const {email} = formData;
  const onChange = e => setFormData({... formData,[e.target.name]:e.target.value});
  const onSubmit = e =>{
    e.preventDefault();
    reset_password(email);
    setRequestSent(true);
  };

  if (requestSent){
    return <Navigate to="/" />;
  }

return (
  <div className={s.wrapper}>
    <div className={s.auth}>
      <h3>Отправить письмо восстановления</h3>

      <form onSubmit={e=>onSubmit(e)} className={s.form}>
        <div className={s.block}>
          <label className={s.text_field__label} htmlFor="email">
            E-mail
            <div
              className={`${s.text_field__icon} ${s.text_field__icon_email}`}
            >
              <input
                className={s.text_field__input}
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={e=>onChange(e)}
                required
              />
            </div>
          </label>
        </div>
        <label htmlFor="buttonAuth" className={s.join}>
            Отправить код
          </label>
        <button type="submit" id="buttonAuth" className={s.hideButton}>
        </button>
        
      </form>
    </div>
  </div>
);
};

export default connect(null,{reset_password})(ResetPassword);