import { useTranslation } from 'react-i18next';
import styles from './info.module.scss';
import { CreditCard, StarIconBlue } from 'src/assets/svg';
const HomeInfo = () => {
  const { t } = useTranslation();
  const infoCards = [
    {
      title: t('feature.card_title1'),
      text: t('feature.card_text1'),
    },
    {
      title: t('feature.card_title2'),
      text: t('feature.card_text2'),
    },
    {
      title: t('feature.card_title3'),
      text: t('feature.card_text3'),
    },
  ];
  return (
    <div id="how-it-works" className="container">
      <div className={styles.info}>
        <div className={styles.infoHeader}>
          <StarIconBlue />
          <span className={styles.subtitle}>{t('feature.subtitle')}</span>
        </div>
        <h2>{t('feature.title')}</h2>
        <p className="text">{t('feature.desc')}</p>
        <div className={styles.infoCards}>
          {infoCards.map((item, index) => (
            <div className={styles.infoCard} key={index}>
              <div className={styles.infoCardHeader}>
                <CreditCard />
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
