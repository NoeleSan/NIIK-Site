import s from "./arrow.module.css";

function Arrow() {
  return (
    <div className={s.blockArrow} id="arrow">
      <img src="./img/arrow.png" alt="Наверх" className={s.arrowImg} />
    </div>
  );
}

export default Arrow;
