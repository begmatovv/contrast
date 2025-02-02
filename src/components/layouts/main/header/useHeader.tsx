import { useState } from 'react';

function useHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (id?: string) => {
    setIsDropdownOpen(!isDropdownOpen);

    if (id) {
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300); // Animatsiya tugashini kutish
    }
  };

  const links = [
    { label: 'О контрастных препаратах', href: 'about' },
    { label: 'Как это работает', href: 'how-it-works' },
    { label: 'Клинические исследования', href: 'clinical-research' },
    { label: 'Отзывы', href: 'reviews' },
  ];

  return {
    links,
    isDropdownOpen,
    setIsDropdownOpen,
    toggleDropdown,
  };
}

export default useHeader;
