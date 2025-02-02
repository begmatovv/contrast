import styles from './superiority.module.scss';
import heart from '/src/assets/img/heart-tick.png';
const HomeSuperiority = () => {
  return (
    <div className={styles.superiority}>
      <div className="container">
        <h2 className={styles.title}>
          Почему выбирают наши контрастные препараты
        </h2>
        <div className={styles.superiorityCards}>
          {superiorityCards.map((item, index) => (
            <div className={styles.superiorityCard} key={index}>
              <div className={styles.superiorityCardHeader}>
                <img src={heart} alt="" />
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

export default HomeSuperiority;
const superiorityCards = [
  {
    title: 'Непревзойденная четкость',
    text: 'Высококачественные изображения для точной диагностики.',
  },
  {
    title: 'Безопасность',
    text: 'Разработаны с учетом последних протоколов безопасности',
  },
  {
    title: 'Широкое применение',
    text: 'Подходят для КТ, МРТ и рентгеновских процедур.',
  },
  {
    title: 'Доверие профессионалов',
    text: 'Предпочтительный выбор ведущих медицинских учреждений.',
  },
];
