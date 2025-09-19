import "./AIBanner.css";

type AIBannerProps = {
    getRecipeFromAI: () => void;
}

export default function AIBanner({ getRecipeFromAI }: AIBannerProps) {
    return (
        <section className="banner">
            <div className="banner-text">
                <h3 className="text-header">Ready for a recipe?</h3>
                <p className="text-content">Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={getRecipeFromAI} className="banner-button">Get a recipe</button>
        </section>
    );
}
