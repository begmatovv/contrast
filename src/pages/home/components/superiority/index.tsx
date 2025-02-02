import { useTranslation } from 'react-i18next';
import styles from './superiority.module.scss';
import { HeartTick } from 'src/assets/svg';
const HomeSuperiority = () => {
  const { t } = useTranslation();
  const superiorityCards = [
    {
      title: t('superiority.card_title1'),
      text: t('superiority.card_text1'),
    },
    {
      title: t('superiority.card_title2'),
      text: t('superiority.card_text2'),
    },
    {
      title: t('superiority.card_title3'),
      text: t('superiority.card_text3'),
    },
    {
      title: t('superiority.card_title4'),
      text: t('superiority.card_text4'),
    },
  ];
  return (
    <div className={styles.superiority}>
      <div className="container">
        <h2 className={styles.title}>{t('superiority.title')}</h2>
        <div className={styles.superiorityCards}>
          {superiorityCards.map((item, index) => (
            <div className={styles.superiorityCard} key={index}>
              <div className={styles.superiorityCardHeader}>
                <HeartTick />
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
