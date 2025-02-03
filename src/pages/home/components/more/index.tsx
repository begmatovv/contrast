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
            <h2>{t('more.title')}</h2>
            <p className="text">{t('more.desc')}</p>
            <div className={styles.btnwrap}>
              {' '}
              <CustomButton bg="#00707B" textColor="white">
                {t('header.btn')}
              </CustomButton>
              <CustomButton bg="white" textColor="#00707B">
                {t('hero.btn2')}
              </CustomButton>
            </div>
          </div>
          <img src={img} alt="" height={246} width={246} />
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.knowMore}>
            <p className="text">{t('more.desc2')}</p>
            <CustomButton textColor="white" bg="#00707B">
              {t('more.btn4')}
            </CustomButton>
          </div>
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeMore;
