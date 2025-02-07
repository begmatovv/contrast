import styles from './header.module.scss';
import useHeader from './useHeader';
import { CustomButton } from 'src/components/common';
import {
  BurgerBtn,
  LogoBlue,
  RemoveIcon,
  LogoMobileBlue,
  LogoMobileWhite,
  ArrowIcon,
} from 'src/assets/svg';
import LanguageButton from './langButton';
import { useTranslation } from 'react-i18next';
const MainLayoutHeader = () => {
  const { links, toggleDropdown, isDropdownOpen } = useHeader();
  const { t } = useTranslation();

  return (
    <div className={`container ${isDropdownOpen ? 'blurred' : ''}`}>
      <div className={styles.header} data-aos="fade-down">
        <div className={styles.logo}>
          <LogoBlue />
        </div>
        <div className={styles.logoWhite}>
          <LogoMobileWhite />
        </div>

        <ul className={styles.menu}>
          {links.map((link) => (
            <li
              key={link.href}
              className={styles.menuItem}
              data-aos="fade-down"
            >
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

        <div className={styles.buttonsWrap} data-aos="zoom-in">
          <LanguageButton />
          <CustomButton textColor="white" bg="#00707B">
            {t('header.btn')}
          </CustomButton>
        </div>

        <button
          className={styles.menuButton}
          onClick={() => toggleDropdown()}
          data-aos="fade-left"
        >
          <BurgerBtn />
        </button>
      </div>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div
          className={styles.dropdownWrapper}
          onClick={() => toggleDropdown()}
        >
          <div
            className={`${styles.dropdown} ${styles.smoothTransition}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.dropdownContent} data-aos="fade-up">
              <div className={styles.dropdownHeader}>
                <LogoMobileBlue />

                <div className={styles.dropdownBtnWrap}>
                  <LanguageButton />
                  <button
                    className={styles.closeButton}
                    onClick={() => toggleDropdown()}
                  >
                    <RemoveIcon />
                  </button>
                </div>
              </div>
              <ul className={styles.dropdownMenu}>
                {links.map((link) => (
                  <li
                    key={link.href}
                    className={styles.dropdownMenuItem}
                    data-aos="fade-right"
                  >
                    <a
                      href={`#${link.href}`}
                      className={styles.dropdownItem}
                      onClick={() => toggleDropdown()}
                    >
                      <span>{link.label}</span>
                      <ArrowIcon />
                    </a>
                  </li>
                ))}
              </ul>
              <div className={styles.dropdownButtons} data-aos="zoom-in">
                <CustomButton textColor="white" bg="#00707B">
                  {t('header.btn')}
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayoutHeader;
