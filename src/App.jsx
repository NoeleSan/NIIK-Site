import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";
import s from "./app.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import {Provider, connect} from "react-redux";
import {checkAthenticated, load_user} from "./auth.action";
import { useEffect } from 'react';
const App=(props)=> {
  useEffect(() => {
    props.checkAthenticated();
    props.load_user();
  },[]);
  return (
      <div className={s.wrapper}>
        <div className={s.img}>
            <Header />
            <Main />
            <Footer />
        </div>
      </div>
  );
}

export default connect(null,{checkAthenticated,load_user})(App);
