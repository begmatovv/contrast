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
      <h2 data-aos="fade-right">{t('contrast.title1')}</h2>
      <p data-aos="fade-left" className="text">{t('contrast.desc')}</p>
      <div className={styles.imgContainer}>
        <img data-aos="fade-right" src={images.contrast_img1} alt="img" width={618} />
        <img data-aos="fade-left" src={images.contrast_img2} alt="img" width={618} />
      </div>
      <div className={styles.featureCards}>
        {featureCards.map((item, index) => (
          <div className={styles.featureCard} key={index} data-aos="fade-up">
            <p data-aos="fade-up">{item.img}</p>
            <p data-aos="fade-down">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContrastAgents;
