import React from 'react';
import styles from './footer.module.scss';
// import {
//   YoutubeIcon,
//   InstaIcon,
//   TwitterIcon,
//   LinkedinIcon,
// } from 'src/assets/svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MainLayoutFooter = () => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.footer} container`}>
      <div className={styles.top}>
        {' '}
        <div className={styles.address}>
          <p>{t('footer.location')}</p>
          <h4>{t('footer.address')}</h4>
        </div>
        <div className={styles.phone}>
          <p>{t('footer.number')}</p>
          <a href="tel:+998945550000">+998 94 555 00 00</a>
        </div>
        <div className={styles.email}>
          <p>{t('footer.email')}</p>
          <a href="mailto:info@contrasttana.com">info@contrasttana.com</a>
        </div>
        {/* <div className={styles.socialMedia}>
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
        </div> */}
      </div>
      <hr />
      <div className={styles.bottom}>
        <p>{t('footer.policy')}</p>
        <span>
          Design by <Link to="https://www.xcdm.ai/">xcdm.ai</Link>
        </span>
      </div>
    </div>
  );
};

export default MainLayoutFooter;
