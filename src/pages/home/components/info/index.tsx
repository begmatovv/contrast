import styles from './info.module.scss';
import img1 from '/src/assets/img/card.png';
import star from '/src/assets/img/star.png';
const HomeInfo = () => {
  return (
    <div id="how-it-works" className="container">
      <div className={styles.info}>
        <div className={styles.infoHeader}>
          <img src={star} alt="" />
          <span className={styles.subtitle}>Точность в каждой капле</span>
        </div>
        <h2 className={styles.title}>Как это работает</h2>
        <p className={styles.text}>
          Контрастные препараты изменяют восприятие тканей визуализирующими
          устройствами:
        </p>
        <div className={styles.infoCards}>
          {infoCards.map((item, index) => (
            <div className={styles.infoCard} key={index}>
              <div className={styles.infoCardHeader}>
                <img src={img1} alt="" />
                <h3>{item.title}</h3>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;

const infoCards = [
  {
    title: 'Препараты на основе йода',
    text: 'Усиливают рентгеновские и КТ-изображения, поглощая рентгеновские лучи в целевых зонах.',
  },
  {
    title: 'Препараты на основе гадолиния',
    text: 'Улучшают МРТ-сканирование, подчеркивая мягкие ткани.',
  },
  {
    title: 'Сульфат бария',
    text: 'Обеспечивает видимость пищеварительной системы на рентгене или флюороскопии.',
  },
];
