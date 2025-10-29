import { t } from "i18next";
import "./AIBanner.css";

type AIBannerProps = {
    getRecipeFromAI: () => void;
    isLoading: boolean
}

export default function AIBanner({ getRecipeFromAI, isLoading }: AIBannerProps) {
    return (
        <section className="banner">
            <div className="banner-text">
                <h3 className="text-header">{t('aiHeader')}</h3>
                <p className="text-content">{t('aiParagraph')}</p>
            </div>
            <button onClick={getRecipeFromAI} className={`banner-button ${isLoading ? 'loading' : ''}`}>{isLoading ? '' : t('aiButton')}</button>
        </section>
    );
}
