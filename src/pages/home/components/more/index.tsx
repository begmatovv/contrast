import ButtonPrimary from 'src/components/common/buttonPrimary';
import styles from './more.module.scss';
import img from '/src/assets/img/phoneMore.png';
import img2 from '/src/assets/img/socialMedia.png';
import { CustomButton } from 'src/components/common';
const HomeMore = () => {
  return (
    <div className="container">
      {' '}
      <div className={styles.more}>
        <div className={styles.moreContainer}>
          {' '}
          <div className={styles.knowMore}>
            <h2 className={styles.title}>Хотите узнать больше?</h2>
            <p className={styles.text}>
              Сделайте шаг к лучшей визуализации и диагностике.
            </p>
            <div className={styles.btnwrap}>
              {' '}
              <CustomButton bg="#00707B" textColor="white">
                Связаться с нами{' '}
              </CustomButton>
              <CustomButton bg="white" textColor="#00707B">
                Скачать руководство по безопасности{' '}
              </CustomButton>
            </div>
          </div>
          <img src={img} alt="" height={246} width={246} />
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.knowMore}>
            <p className={styles.text}>
              Подпишитесь на нашу рассылку, чтобы быть в курсе последних
              новостей о контрастных препаратах и технологиях визуализации.
            </p>
            <CustomButton textColor="white" bg="#00707B">
              Подписаться
            </CustomButton>
          </div>
          <img src={img2} alt="" width={334} height={181} />
        </div>
      </div>
    </div>
  );
};

export default HomeMore;
