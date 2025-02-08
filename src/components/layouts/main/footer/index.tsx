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
import { TelegramIcon, WechatIcon, WhatssapIcon } from 'src/assets/svg';

const MainLayoutFooter = () => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.footer} container`}>
      <div className={styles.top}>
        {' '}
        <div data-aos="fade-up" className={styles.address}>
          <p>{t('footer.location')}</p>
          <h4>{t('footer.address')}</h4>
        </div>
        <div data-aos="fade-up" className={styles.phone}>
          <p>{t('footer.number')}</p>
          <a href="tel:+998945550000">+998 94 555 00 00</a>
        </div>
        <div data-aos="fade-up" className={styles.email}>
          <p>{t('footer.email')}</p>
          <a href="mailto:info@contrasttana.com">info@contrasttana.com</a>
        </div>
        <div data-aos="fade-up" className={styles.socialMedia}>
          <p>Социальная сеть</p>
          <div className={styles.social}>
            <Link to="/">
              {' '}
              <WechatIcon />
            </Link>
            <Link to="/">
              {' '}
              <TelegramIcon />
            </Link>
            <Link to="/">
              {' '}
              <WhatssapIcon />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.bottom}>
        <p data-aos="fade-up">{t('footer.policy')}</p>
        <span data-aos="fade-up">
          Design by <Link to="https://www.xcdm.ai/">xcdm.ai</Link>
        </span>
      </div>
    </div>
  );
};

export default MainLayoutFooter;
