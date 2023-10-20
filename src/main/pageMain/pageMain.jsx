import s from "./pageMain.module.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
export default function PageMain() {
  const slides = [
    {
      title: <img src="./img/slider1.jpg" alt="" />,
      description: "dfhdsfhdsfhdsf",
    },
    {
      title: <img src="./img/slider2.jpg" alt="" />,
      description: "Lorem ipsum",
    },
    {
      title: <img src="./img/slider3.jpg" alt="" />,
      description: "Lorem ipsum",
    },
    {
      title: <img src="./img/slider4.jpg" alt="" />,
      description: "Lorem ipsum",
    },
    {
      title: <img src="./img/slider5.jpg" alt="" />,
      description: "Lorem ipsum",
    },
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.slider}>
        <Slider autoplay="2500">
          {slides.map((slide, index) => (
            <div key={index}>
              <h2 className={s.imgSlider}>{slide.title}</h2>
              <div className={s.textSlider}>{slide.description}</div>
            </div>
          ))}
        </Slider>
        <div className={s.info}>
          <img src="./img/1under.png" alt="1" />
          <img src="./img/2under.png" alt="2" />
          <img src="./img/3under.png" alt="3" />
          <img src="./img/4under.png" alt="4" />
        </div>
      </div>
      <div className={s.why}>
        <a
          href="https://niik.ru/upload/pochemu_vigodno_rabotat_s_niik.pdf"
          target="blank"
        >
          <img src="img/1.png" alt="1" />
          <p>Почему выгодно работать с нами</p>
        </a>
        <a
          href="https://niik.ru/upload/pochemu_vigodno_proizvodit_karbamid.pdf"
          target="blank"
        >
          <img src="img/2.png" alt="1" />
          <p>Почему выгодно производить карбамид?</p>
        </a>
        <a
          href="https://niik.ru/upload/pochemu_nuzno_vibirat_niik.pdf"
          target="blank"
        >
          <img src="img/3.png" alt="1" />
          <p>
            Почему выбирают нас для реализации в России лучших мировых
            технологий
          </p>
        </a>
      </div>
      <div className={s.build}>
        <img src="./img/buildVolgograd.jpg" alt="build" />
      </div>
    </div>
  );
}
