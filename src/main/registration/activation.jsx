import s from "./registration.module.css";
import { useForm } from "react-hook-form";
import { NavLink,Link, Navigate, useParams } from "react-router-dom";
import {useState} from "react";
import {connect} from "react-redux";
import {verify} from '../../auth.action'

const Activate = ({verify})=> {
    const [verified,setVerified]= useState(false);
    const params = useParams();
    const verify_account = e =>{
        const uid =params.uid;
        const token = params.token;
        verify(uid,token);
        setVerified(true)
  };

  if (verified){
    return <Navigate to="/" />;
  }

return (
  <div className={s.wrapper}>
    <div className={s.auth}>
      <h3>Активировать аккаунт</h3>

      <form onSubmit={e=>verify_account(e)} className={s.form}>
        <label htmlFor="buttonAuth" className={s.join}>
            Активировать
          </label>
        <button type="submit" id="buttonAuth" className={s.hideButton}>
        </button>
        
      </form>
    </div>
  </div>
);
};

export default connect(null,{verify})(Activate);