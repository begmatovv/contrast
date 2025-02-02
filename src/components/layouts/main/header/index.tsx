import { Link } from 'react-router-dom';
import styles from 'src/components/layouts/main/header/header.module.scss';
import useHeader from './useHeader';
import { CustomButton } from 'src/components/common';
import { colors } from 'src/constants/theme';
const MainLayoutHeader = () => {
  const { links, isDropdownOpen, setIsDropdownOpen, toggleDropdown } =
    useHeader();
  return (
    <div className={styles.container}>
      {' '}
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="" alt="logo" />
        </div>
        <ul className={styles.menu}>
          {links.map((link) => (
            <li key={link.href}>
              <Link className={styles.item} to={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* <div className={styles.btn}>Связаться с экспертом</div>
         */}
        <CustomButton textColor="white" bg="#00707B">
          Связаться
        </CustomButton>
      </div>
    </div>
  );
};

export default MainLayoutHeader;
