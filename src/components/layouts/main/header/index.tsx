import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import useHeader from './useHeader';
import { CustomButton } from 'src/components/common';
import btnDropdown from 'src/assets/img/burger.png';
import { LogoBlue, LogoWhite } from 'src/assets/svg';

const MainLayoutHeader = () => {
  const { links, isDropdownOpen, toggleDropdown } = useHeader();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <LogoBlue />
        </div>
        <div className={styles.logoWhite}>
          <LogoWhite />
        </div>

        {/* Orqa fonni blur qilish */}
        <div
          className={`${styles.overlay} ${isDropdownOpen ? styles.active : ''}`}
          onClick={() => toggleDropdown()}
        ></div>

        {/* Mobil menyu tugmasi */}
        <button className={styles.menuButton} onClick={() => toggleDropdown()}>
          <img src={btnDropdown} alt="Меню" />
        </button>

        {/* Menyu */}
        <ul className={`${styles.menu} ${isDropdownOpen ? styles.open : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={`#${link.href}`}
                className={styles.item}
                onClick={() => toggleDropdown()}
              >
                {link.label}
              </a>
            </li>
          ))}

          <CustomButton textColor="white" bg="#00707B">
            Связаться
          </CustomButton>
        </ul>
      </div>
    </div>
  );
};

export default MainLayoutHeader;
