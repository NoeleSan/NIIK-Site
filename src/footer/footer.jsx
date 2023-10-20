import Logoname from "../header/logoName/logoname";
import s from "./footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={s.wrapper}>
        <div className={s.top_info}>
          <Logoname />
          <hr className={s.hrLine} />
          <div className={s.link}>
            <p>Почта:&nbsp;example141@yandex.ru</p>
            <p>Телефон:&nbsp;8&nbsp;500&nbsp;555&nbsp;35-35</p>
          </div>
        </div>
        <hr />
        <div className={s.info}>
          <p>
            &copy;1952-2022 АО "НИИК" Член международных ассоциаций. Все права
            защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
