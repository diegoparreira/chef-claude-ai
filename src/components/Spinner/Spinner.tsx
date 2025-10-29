import { t } from 'i18next';
import './Spinner.css';

export default function Spinner() {
    return (
        <div className="spinner-container">
            <div className="cooking-spinner">
                <div className="pot">
                    <div className="steam"></div>
                    <div className="steam"></div>
                    <div className="steam"></div>
                </div>
            </div>
            <p className="spinner-text">{t('loading')}</p>
        </div>
    );
}