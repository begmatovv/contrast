import ButtonPrimary from 'src/components/common/buttonPrimary';
import styles from './security.module.scss';
import security from '/src/assets/img/security.png';
import tick from '/src/assets/img/shield-tick.png';
import { CustomButton } from 'src/components/common';
const HomeSecurity = () => {
  return (
    <div id="clinical-research" className="container">
      <div className={styles.security}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ваша безопасность — наш приоритет</h2>
          <p className={styles.text}>
            Контрастные препараты проходят строгие тесты на безопасность и
            эффективность, что обеспечивает спокойствие для пациентов и
            медицинских работников.
          </p>
          <div className={styles.btnwrap}>
            <CustomButton textColor="white" bg="#00707B">
              Узнать больше
            </CustomButton>
            <CustomButton textColor="#00707B" bg="white">
              Связаться с экспертом
            </CustomButton>
          </div>
        </div>

        <div className={styles.rightImg}>
          <img src={security} alt="" />
        </div>
      </div>
      <div className={styles.securityCards}>
        {securityCards.map((item, index) => (
          <div className={styles.securityCard} key={index}>
            <div className={styles.securityCardHeader}>
              <img src={tick} alt="" />
              <h3>{item.title}</h3>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.btnwrap2}>
        <ButtonPrimary text="Узнать больше" />
        <ButtonPrimary text="Связаться с экспертом" />
      </div>
    </div>
  );
};

export default HomeSecurity;

const securityCards = [
  {
    title: 'Минимальные риски',
    text: 'Редкие аллергические реакции, предварительный скрининг.',
  },
  {
    title: 'Современные формулы',
    text: 'Редкие аллергические реакции, предварительный скрининг.',
  },
  {
    title: 'Контролируемое использование',
    text: 'Препараты вводятся под наблюдением специалистов',
  },
  {
    title: 'Безопасно для здоровье',
    text: 'Низкая вероятность побочных эффектов на человека.',
  },
  {
    title: 'Подходят большинству',
    text: 'Подходят большинству пациентов при проведении скрининга.',
  },
  {
    title: 'Гидратация до и после',
    text: 'Гидратация до и после процедуры снижает риски.',
  },
];
