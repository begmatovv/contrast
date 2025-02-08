import { useTranslation } from 'react-i18next';
import styles from './reviews.module.scss';
import doc from '/src/assets/img/doctor.png';

const HomeReviews = () => {
  const { t } = useTranslation();
  return (
    <div id="reviews" className={styles.review}>
      <div className="container">
        <h2 data-aos="fade-right">{t('review.title')}</h2>
        <div className={styles.reviewCards}>
          <img
            data-aos="fade-up"
            className={styles.docImg}
            src={doc}
            alt="Doctor"
          />
          <div data-aos="fade-down" className={styles.content}>
            <div className={styles.user}>
              <img
                className={styles.docImg}
                src={doc}
                alt="Doctor"
                width={72}
                height={72}
              />
              <div>
                <h4>{t('review.name')}</h4>
                <span>{t('review.job')}</span>
              </div>
            </div>
            <h3>{t('review.desc')}</h3>
            <p>
              {t('review.history1')}
              <br />
              {t('review.history')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeReviews;
