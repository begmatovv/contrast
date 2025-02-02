import { useTranslation } from 'react-i18next';
import { Button, Menu, Dropdown } from 'antd';
import { InstaIcon, LanguageSvg } from 'src/assets/svg';
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
      <Button
        className="header-top-language header-top-language-dark"
        type="text"
        icon={<LanguageSvg />}
      >
        <p>{i18n.language === 'ru' ? 'Ру' : 'En'}</p>
        <ArrowDownIcon />
      </Button>
    </Dropdown>
  );
}

export default LanguageButton;
