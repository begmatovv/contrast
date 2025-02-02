import styles from './reviews.module.scss';
import doc from '/src/assets/img/doctor.png';
import user from '/src/assets/img/user.png';
const HomeReviews = () => {
  return (
    <div className={styles.review}>
      <div className="container">
        <h2 className={styles.title}>Мнение экспертов и пациентов</h2>
        <div className={styles.reviewCards}>
          <img className={styles.docImg} src={doc} alt="" />
          <div className={styles.content}>
            <div className={styles.user}>
              <img src={user} alt="" />
              <div>
                <h4>Д-р Михаил Р</h4>
                <span>Рентгенолог</span>
              </div>
            </div>
            <h3>
              Контрастные препараты изменили подход к диагностической
              визуализации, позволяя нам обнаруживать заболевания на ранних
              стадиях с большей точностью
            </h3>
            <p>
              История пациента <br /> Я волновалась перед процедурой, но
              благодаря контрастному препарату сканирование прошло быстро,
              безболезненно и с четкими результатами. Мой врач сразу определил
              проблему!" – Сара Л.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeReviews;
