import styles from './security.module.scss';
import security from '/src/assets/img/security.png';
import { CustomButton } from 'src/components/common';
import { useTranslation } from 'react-i18next';
import { ShieldTick } from 'src/assets/svg';
import images from 'src/constants/images';
const HomeSecurity = () => {
  const { t } = useTranslation();
  const securityCards = [
    {
      title: t('security.card_title1'),
      text: t('security.card_text1'),
    },
    {
      title: t('security.card_title2'),
      text: t('security.card_text2'),
    },
    {
      title: t('security.card_title3'),
      text: t('security.card_text3'),
    },
    {
      title: t('security.card_title4'),
      text: t('security.card_text4'),
    },
    {
      title: t('security.card_title5'),
      text: t('security.card_text5'),
    },
    {
      title: t('security.card_title6'),
      text: t('security.card_text6'),
    },
  ];
  return (
    <div id="clinical-research" className="container">
      <div className={styles.security}>
        <div className={styles.content}>
          <h2>{t('security.title')}</h2>
          <p className="text">{t('security.desc')}</p>
          <div className={styles.btnwrap}>
            <CustomButton textColor="white" bg="#00707B">
              {t('hero.btn')}
            </CustomButton>
            <CustomButton textColor="#00707B" bg="white">
              {t('hero.btn2')}
            </CustomButton>
          </div>
        </div>
        <div className={styles.rightImg}>
          <img src={images.security} alt="" />
        </div>
      </div>
      <div className={styles.securityCards}>
        {securityCards.map((item, index) => (
          <div className={styles.securityCard} key={index}>
            <div className={styles.securityCardHeader}>
              <ShieldTick />
              <h3>{item.title}</h3>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.btnwrap2}>
        <CustomButton textColor="white" bg="#00707B">
          {t('hero.btn')}
        </CustomButton>
        <CustomButton textColor="#00707B" bg="white">
          {t('hero.btn2')}
        </CustomButton>
      </div>
    </div>
  );
};

export default HomeSecurity;
