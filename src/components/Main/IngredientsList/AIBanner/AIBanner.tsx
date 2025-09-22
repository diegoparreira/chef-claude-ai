import { t } from "i18next";
import "./AIBanner.css";

type AIBannerProps = {
    getRecipeFromAI: () => void;
}

export default function AIBanner({ getRecipeFromAI }: AIBannerProps) {
    return (
        <section className="banner">
            <div className="banner-text">
                <h3 className="text-header">{t('aiHeader')}</h3>
                <p className="text-content">{t('aiParagraph')}</p>
            </div>
            <button onClick={getRecipeFromAI} className="banner-button">{t('aiButton')}</button>
        </section>
    );
}
