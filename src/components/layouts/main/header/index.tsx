import styles from './header.module.scss';
import useHeader from './useHeader';
import { CustomButton } from 'src/components/common';
import {
  BurgerBtn,
  MinusIcon,
  ArrowDownSvg,
  LogoBlue,
  LogoWhite,
  RemoveIcon,
  LogoMobileBlue,
  LogoMobileWhite,
} from 'src/assets/svg';
import LanguageButton from './langButton';
import { useTranslation } from 'react-i18next';
import { ArrowCircleDown } from 'iconsax-react';
const MainLayoutHeader = () => {
  const { links, toggleDropdown, isDropdownOpen } = useHeader();
  const { t } = useTranslation();

  return (
    <div className={`container ${isDropdownOpen ? 'blurred' : ''}`}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <LogoBlue />
        </div>
        <div className={styles.logoWhite}>
          <LogoMobileWhite />
        </div>

        <ul className={styles.menu}>
          {links.map((link) => (
            <li key={link.href} className={styles.menuItem}>
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

        <button className={styles.menuButton} onClick={() => toggleDropdown()}>
          <BurgerBtn />
        </button>
      </div>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div
          className={`${styles.dropdown} ${styles.smoothTransition}`}
          onClick={() => toggleDropdown()}
        >
          <div
            className={`${styles.dropdownContent} container`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.dropdownHeader}>
              <LogoMobileBlue />
              <button
                className={styles.closeButton}
                onClick={() => toggleDropdown()}
              >
                <RemoveIcon />
              </button>
            </div>
            <ul className={styles.dropdownMenu}>
              {links.map((link) => (
                <li key={link.href} className={styles.dropdownMenuItem}>
                  <a
                    href={`#${link.href}`}
                    className={styles.dropdownItem}
                    onClick={() => toggleDropdown()}
                  >
                    <span>{link.label}</span>
                    <ArrowCircleDown className={styles.menuIcon} />
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.dropdownButtons}>
              <CustomButton textColor="white" bg="#00707B">
                {t('header.btn')}
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayoutHeader;
