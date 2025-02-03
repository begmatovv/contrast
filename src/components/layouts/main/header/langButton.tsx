import { useTranslation } from 'react-i18next';
import { Button, Menu, Dropdown } from 'antd';
import { ArrowDownIcon } from 'src/components/icons';

function LanguageButton() {
  const { i18n } = useTranslation();

  const handleChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('LANGUAGE', lang);
  };

  const menu = (
    <Menu>
      <Menu.Item key="en" onClick={() => handleChange('en')}>
        English
      </Menu.Item>
      <Menu.Item key="ru" onClick={() => handleChange('ru')}>
        Русский
      </Menu.Item>
    </Menu>
  );
  
  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
      <Button type="text" className='langButton'>
        <p className="langText">{i18n.language === 'ru' ? 'Русский' : ' English'}</p>
        <ArrowDownIcon  />
      </Button>
    </Dropdown>
  );
}

export default LanguageButton;
