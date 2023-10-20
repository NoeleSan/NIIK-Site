import s from "./orders.module.css";
import { useEffect, useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
function Orders() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let respons = await fetch("http://127.0.0.1:8000/cards/");
      let data = await respons.json();
      setData(data);
    }
    fetchData();
  }, []);
  const addCall = async (project, name, number) => {
    await fetch(`http://127.0.0.1:8000/call/`, {
      method: "POST",
      body: JSON.stringify({
        number: number,
        name: name,
        project: project,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          return res.json();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={s.wrapper}>
      {data.map((element, id) => (
        <div className={s.projCard} key={id}>
          <img src={element["url"]} alt="img" className={s.imgProjCard} />
          <div className={s.nameProjCard}>{element["name"]}</div>
          <div className={s.textProjCard}>{element["discription"]}</div>
          <NavLink
            to="/profile/orders/orderAccess"
            className={s.order}
            element={element}
          >
            <button
              onClick={() =>
                addCall(
                  element["name"],
                  localStorage.getItem("name"),
                  localStorage.getItem("phone")
                )
              }
            >
              Заказать
            </button>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Orders;
