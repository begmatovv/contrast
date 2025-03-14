import { useTranslation } from 'react-i18next';
import styles from './proof.module.scss';
import { ScreeningIcon } from 'src/assets/svg';
const HomeProof = () => {
  const { t } = useTranslation();

  const proofCards = [
    {
      title: t('proof.card_title1'),
      text: t('proof.card_text1'),
    },
    {
      title: t('proof.card_title2'),
      text: t('proof.card_text2'),
    },
    {
      title: t('proof.card_title3'),
      text: t('proof.card_text3'),
    },
  ];
  return (
    <div className={styles.proof}>
      <div className="container">
        <h2 data-aos="fade-right">{t('proof.title')}</h2>
        <div className={styles.proofCards}>
          {proofCards.map((item, index) => (
            <div data-aos="fade-up" className={styles.proofCard} key={index}>
              <ScreeningIcon />
              <h3 data-aos="zoom-in">{item.title}</h3>
              <p data-aos="zoom-in">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProof;
