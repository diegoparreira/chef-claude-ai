import './Header.css';
import logoSrc from '../../assets/chef-claude-icon.png';

export default function Header() {
    return (
        <header className="header-container">
            <img src={logoSrc} alt="Chef Claude Logo" className="header-logo" />
            <h1 className="header-brand">Chef Claude</h1>
        </header>
    )
}