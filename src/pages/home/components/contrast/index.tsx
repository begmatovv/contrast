import { useTranslation } from 'react-i18next';
import styles from './contrastAgents.module.scss';
import img1 from '/src/assets/img/contrast1.png';
import img2 from '/src/assets/img/contrast2.png';
import img3 from '/src/assets/img/contrast3.png';

const HomeContrastAgents = () => {
  const { t } = useTranslation();
  const featureCards = [
    {
      img: { img1 },
      title: t('contrast.card1'),
    },
    {
      img: { img2 },
      title: t('contrast.card2'),
    },
    {
      img: { img3 },
      title: t('contrast.card3'),
    },
  ];
  return (
    <div id="about" className={`container ${styles.contrastAgents}`}>
      <h2 className={styles.title}>{t('contrast.title1')}</h2>
      <p className={styles.text}>{t('contrast.desc')}</p>
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
