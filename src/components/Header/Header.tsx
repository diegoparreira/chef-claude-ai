import './Header.css';
import logoSrc from '../../assets/chef-claude-icon.png';
import LanguageToggle from './LanguageToggle/LanguageToggle';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t } = useTranslation();

    return (
        <header className="header-container">
            <div className="logo-container">
                <img src={logoSrc} alt="Chef Claude Logo" className="header-logo" />
                <h1 className="header-brand">{t('headerBrand')}</h1>
            </div>
            <LanguageToggle />
        </header>
    )
}