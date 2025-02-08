import ButtonPrimary from 'src/components/common/buttonPrimary';
import styles from './more.module.scss';
import img from '/src/assets/img/phoneMore.png';
import img2 from '/src/assets/img/socialMedia.png';
import { CustomButton } from 'src/components/common';
import { useTranslation } from 'react-i18next';
const HomeMore = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      {' '}
      <div className={styles.more}>
        <div className={styles.moreContainer}>
          {' '}
          <div className={styles.knowMore}>
            <h2 data-aos="fade-right">{t('more.title')}</h2>
            <p data-aos="fade-left" className="text">{t('more.desc')}</p>
            <div className={styles.btnwrap}>
              {' '}
              <CustomButton bg="#00707B" textColor="white" data-aos="zoom-in">
                {t('header.btn')}
              </CustomButton>
              <CustomButton bg="white" textColor="#00707B" data-aos="zoom-in">
                {t('hero.btn2')}
              </CustomButton>
            </div>
          </div>
          <img src={img} alt="" height={246} width={246} data-aos="fade-up" />
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.knowMore}>
            <p data-aos="fade-left" className="text">{t('more.desc2')}</p>
            <CustomButton data-aos="zoom-in" textColor="white" bg="#00707B">
              {t('more.btn4')}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMore;
