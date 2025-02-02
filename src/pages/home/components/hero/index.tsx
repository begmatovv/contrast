import { card, finance, tick } from 'src/assets/svg';
import styles from './hero.module.scss';
import herostar from 'src/assets/img/herostar.png';
import { CustomButton } from 'src/components/common';
import ButtonPrimary from 'src/components/common/buttonPrimary';
import ButtonSecondary from 'src/components/common/buttonSecondary';
const HomeHero = () => {
  return (
    <div className={styles.herowrap}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.herocontainer}>
            <div className={styles.herostar}>
              <img src={herostar} alt="" width={46} height={46} />
              <span>Видеть яснее</span>
            </div>
            <h3 className={styles.title}>
              Передовые методы визуализации с использованием контрастных
              препаратов Революция в диагностической визуализации{' '}
            </h3>
            <p className={styles.text}>
              Улучшите медицинскую визуализацию для повышения эффективности
              лечения.
            </p>
            <div className={styles.features}>
              {features.map((item, index) => (
                <div className={styles.feature} key={index}>
                  <div className={styles.icon}>{item.icon()}</div>
                  <h3 className={styles.title}>{item.title}</h3>
                </div>
              ))}
            </div>
            <div className={styles.buttons}>
              <CustomButton bg="white" textColor="#00707B" defaultHoverBg='#00707B' defaultHoverColor='white'>
                Узнать больше
              </CustomButton>
              <CustomButton bg="#00707B" textColor="white">
                Связаться с экспертом
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
const features = [
  { title: 'безопасность', icon: card },
  { title: 'точность', icon: tick },
  { title: 'четкость', icon: finance },
];
