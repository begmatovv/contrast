import styles from './proof.module.scss';
import proofImg from '/src/assets/img/proofImg.png';
const HomeProof = () => {
  return (
    <div className={styles.proof}>
      <div className="container">
        <h2 className={styles.title}>Доказанная эффективность в реальных условиях</h2>
        <div className={styles.proofCards}>
          {proofCards.map((item, index) => (
            <div className={styles.proofCard} key={index}>
              <img src={proofImg} alt="" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProof;
const proofCards = [
  {
    title: 'Успех в обнаружении опухолей',
    text: 'Клинические исследования показали 90%-е улучшение обнаружения небольших опухолей с использованием контрастных препаратов при КТ.',
  },
  {
    title: 'Точность в кардиологии',
    text: 'Контрастные препараты на основе гадолиния повысили точность диагностики заболеваний сердца на 87%.',
  },
  {
    title: 'Визуализация ЖКТ',
    text: 'Сульфат бария выявил 95% случаев закупорки пищеварительной системы, что позволило провести спасительное лечение.',
  },
];
