import { useTranslation } from 'react-i18next';
import images from 'src/constants/images';
import styles from './contrastAgents.module.scss';
import { AimIcon, HeartIcon, ServiceIcon } from 'src/assets/svg';

const HomeContrastAgents = () => {
  const { t } = useTranslation();
  const featureCards = [
    {
      img: <AimIcon />,
      title: t('contrast.card1'),
    },
    {
      img: <HeartIcon />,
      title: t('contrast.card2'),
    },
    {
      img: <ServiceIcon />,
      title: t('contrast.card3'),
    },
  ];
  return (
    <div id="about" className={`container ${styles.contrastAgents}`}>
      <h2>{t('contrast.title1')}</h2>
      <p className="text">{t('contrast.desc')}</p>
      <div className={styles.imgContainer}>
        <img src={images.contrast_img1} alt="img" width={618} />
        <img src={images.contrast_img2} alt="img" width={618} />
      </div>
      <div className={styles.featureCards}>
        {featureCards.map((item, index) => (
          <div className={styles.featureCard} key={index}>
            <p>{item.img}</p>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContrastAgents;
