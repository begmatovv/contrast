import styles from './contrastAgents.module.scss';
import img1 from '/src/assets/img/contrast1.png';
import img2 from '/src/assets/img/contrast2.png';
import img3 from '/src/assets/img/contrast3.png';

const HomeContrastAgents = () => {
  return (
    <div id="about" className={`container ${styles.contrastAgents}`}>
      <h2 className={styles.title}>О контрастных препаратах</h2>
      <p className={styles.text}>
        Контрастные препараты — это специализированные медицинские средства,
        предназначенные для улучшения видимости внутренних структур при
        проведении таких процедур, как КТ, МРТ и рентген. Они повышают качество
        изображений, что позволяет врачам ставить более точные диагнозы и
        принимать обоснованные решения.
      </p>
      <div className={styles.imgContainer}>
        <img src="/src/assets/img/medicineBlue.png" alt="" width={618} />
        <img src="/src/assets/img/medicineWhite.png" alt="" width={618} />
      </div>
      <div className={styles.featureCards}>
        {featureCards.map((item, index) => (
          <div className={styles.featureCard} key={index}>
            <img
              src={Object.values(item.img)[0]}
              alt=""
              width={62}
              height={62}
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContrastAgents;

const featureCards = [
  {
    img: { img1 },
    title: 'Обнаружения опухолей, тромбов и аномалий органов',
  },
  {
    img: { img2 },
    title: 'Визуализации кровеносных сосудов и сердца.',
  },
  {
    img: { img3 },
    title: 'Диагностики заболеваний желудочно-кишечного тракта',
  },
];
