import s from "./orderAccess.module.css";
import { useEffect, useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
function OrderAccess() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let respons = await fetch("http://127.0.0.1:8000/cards/");
      let data = await respons.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div className={s.wrapper}>
      <p> Скоро с вами свяжутся для уточнения заказа</p>
    </div>
  );
}

export default OrderAccess;
