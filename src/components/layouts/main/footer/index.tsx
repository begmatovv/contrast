import React from 'react';
import styles from './footer.module.scss';
import {
  YoutubeIcon,
  InstaIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'src/assets/svg';
import { Link } from 'react-router-dom';

const MainLayoutFooter = () => {
  return (
    <div className={`${styles.footer} container`}>
      <div className={styles.top}>
        {' '}
        <div className={styles.address}>
          <p>местоположение</p>
          <h4>Город Ташкент, улица Шахрисабз 16А</h4>
        </div>
        <div className={styles.phone}>
          <p>Тел.номер:</p>
          <a href="tel:+998 93 982 50 01">+998 93 982 50 01</a>
        </div>
        <div className={styles.email}>
          <p>Эл.адрес</p>
          <h4>info@icangroup.uz</h4>
        </div>
        <div className={styles.socialMedia}>
          <p>Социальная сеть</p>
          <div className={styles.social}>
            <Link to="/">
              <InstaIcon />
            </Link>
            <Link to="/">
              {' '}
              <TwitterIcon />
            </Link>
            <Link to="/">
              {' '}
              <LinkedinIcon />
            </Link>
            <Link to="/">
              {' '}
              <YoutubeIcon />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.bottom}>
        <p>2023 Barcha huquqlar himoyalangan.</p>
        <span>
          Design by <Link to="https://www.xcdm.ai/">xcdm.ai</Link>
        </span>
      </div>
    </div>
  );
};

export default MainLayoutFooter;
