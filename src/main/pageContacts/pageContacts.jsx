import s from "./pageContacts.module.css";
import GoogleMapReact from "google-map-react";

export default function PageContacts() {
  const defaultProps = {
    center: {
      lat: 56.2324077044,
      lng: 43.4519764506,
    },
    zoom: 11,
  };
  return (
    <div className={s.wrapper}>
      <div className={s.Name}>
        <h2>Контакты</h2>
      </div>
      <div
        style={{
          height: "50vh",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
      <div className={s.info}>
        <div className={s.blockInfo}>
          <h3>Почтовые адреса:</h3>
          <hr />
          <div>
            <b>Головной офис</b>
            <p>
              606008, Российская Федерация, Нижегородская обл., г.Дзержинск, ул.
              Грибоедова, дом 31
            </p>
            <p>
              <b>Телефон: </b> (8313) 39-49-00
            </p>
            <p>
              <b>Факс: </b>
              (8313) 25-52-21{" "}
            </p>
            <p>
              <b>Электронная почта: </b>
              niik@niik.ru
            </p>
          </div>
          <hr />
          <div>
            <b>Нижегородский офис</b>
            <p>603002, г. Нижний Новгород, ул.Долгополова, 50/40</p>
            <p>
              <b>Телефон: </b> (831)277-96-75, (831)277-96-07{" "}
            </p>
            <p>
              <b>Электронная почта: </b> golubtsov_sv@niik.ru
            </p>
          </div>
          <hr />
          <div>
            <b>Московский офис </b>
            <p>
              105064, Российская Федерация, г. Москва, ул. Земляной Вал, 34а,
              стр.1
            </p>
            <p>
              <b>Телефон: </b>
              (495) 917-01-98
            </p>
            <p>
              <b>Электронная почта: </b>msk@niik.ru
            </p>
          </div>
          <hr />
          <div>
            <b>Комплексный отдел (г. Новомосковск)</b>
            <p>
              301664, Российская Федерация, Тульская обл., г. Новомосковск, ул.
              Маяковского, 19в
            </p>
            <p>
              <b>Телефон/факс: </b>
              (4876) 29-75-02
            </p>
            <p>
              <b>Электронная почта: </b>
              nko-niik@niik.ru
            </p>
          </div>
          <hr />
        </div>

        <div className={s.blockInfo}>
          <h3>Банковские реквизиты</h3>
          <hr />
          <b>Юридический и почтовый адрес:</b>
          <p>
            606008, Российская Федерация, Нижегородская обл., г.Дзержинск, ул.
            Грибоедова, дом 31
          </p>
          <p>
            <b>ИНН: </b>5249003464
          </p>
          <p>
            <b>КПП: </b>524901001 Дзержинское ОСБ 4342 в г. Дзержинск
          </p>
          <p>
            <b>БИК: </b>042202603
          </p>
          <p>
            <b>Р/С: </b>40702810242160000802
          </p>
          <p>Волго-Вятский банк ПАО Сбербанк г. Нижний Новгород</p>
          <p>
            <b>К/С: </b>30101810900000000603
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}
