import styles from './header.module.scss';
import useHeader from './useHeader';
import { CustomButton } from 'src/components/common';
import { BurgerBtn, LogoBlue, LogoWhite } from 'src/assets/svg';
import LanguageButton from './langButton';
import { useTranslation } from 'react-i18next';
const MainLayoutHeader = () => {
  const { links, isDropdownOpen, toggleDropdown } = useHeader();
  const { t } = useTranslation();
  return (
    <div className="container">
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

        <button className={styles.menuButton} onClick={() => toggleDropdown()}>
          <BurgerBtn />
        </button>

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
        </ul>
        <div className={styles.buttonsWrap}>
          <LanguageButton />
          <CustomButton textColor="white" bg="#00707B">
            {t('header.btn')}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
export default MainLayoutHeader;
