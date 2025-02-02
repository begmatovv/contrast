import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function useHeader() {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (id?: string) => {
    setIsDropdownOpen(!isDropdownOpen);

    if (id) {
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300); 
    }
  };

  const links = [
    { label: t('header.title1'), href: 'about' },
    { label: t('header.title2'), href: 'how-it-works' },
    { label: t('header.title3'), href: 'clinical-research' },
    { label: t('header.title4'), href: 'reviews' },
  ];

  return {
    links,
    isDropdownOpen,
    setIsDropdownOpen,
    toggleDropdown,
  };
}

export default useHeader;
