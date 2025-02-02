import styles from './header.module.scss';
import useHeader from './useHeader';
import { CustomButton } from 'src/components/common';
import btnDropdown from 'src/assets/img/burger.png';
import { LogoBlue, LogoWhite } from 'src/assets/svg';
import LanguageButton from './langButton';
import { useTranslation } from 'react-i18next';
const MainLayoutHeader = () => {
  const { links, isDropdownOpen, toggleDropdown } = useHeader();
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <LogoBlue />
        </div>
        <div className={styles.logoWhite}>
          <LogoWhite />
        </div>

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
          <LanguageButton />
          <CustomButton textColor="white" bg="#00707B">
            {t('header.btn')}
          </CustomButton>
        </ul>
      </div>
    </div>
  );
};

export default MainLayoutHeader;
