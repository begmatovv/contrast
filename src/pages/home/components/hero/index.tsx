import { StarIcon, card, finance, tick } from 'src/assets/svg';
import styles from './hero.module.scss';
import herostar from 'src/assets/img/herostar.png';
import { CustomButton } from 'src/components/common';
import { useTranslation } from 'react-i18next';
const HomeHero = () => {
  const { t } = useTranslation();
  const features = [
    { title: t('hero.feature1'), icon: card },
    { title: t('hero.feature2'), icon: tick },
    { title: t('hero.feature3'), icon: finance },
  ];
  return (
    <div className={styles.herowrap}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.herocontainer}>
            <div className={styles.herostar}>
              <StarIcon/>
              <span>{t('hero.subtitle')}</span>
            </div>
            <h3 className={styles.title}>{t('hero.title1')}</h3>
            <p className={styles.text}>{t('hero.desc')}</p>
            <div className={styles.features}>
              {features.map((item, index) => (
                <div className={styles.feature} key={index}>
                  <div className={styles.icon}>{item.icon()}</div>
                  <h3 className={styles.title}>{item.title}</h3>
                </div>
              ))}
            </div>
            <div className={styles.buttons}>
              <CustomButton
                bg="white"
                textColor="#00707B"
                defaultHoverBg="#00707B"
                defaultHoverColor="white"
              >
                {t('hero.btn')}
              </CustomButton>
              <CustomButton bg="#00707B" textColor="white">
                {t('hero.btn2')}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
