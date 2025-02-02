import { useState } from 'react';

function useHeader() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const links = [
   {
     label: 'О контрастных препаратах',
     href: '/',
   },
   {
     label: 'Как это работает',
     href: '/',
   },
   {
     label: 'Клинические исследования',
     href: '/',
   },
   {
     label: 'Отзывы',
     href: '/',
   },
 ];
  return {
   links,
    isDropdownOpen,
    setIsDropdownOpen,
    toggleDropdown,
  };
}

export default useHeader;
