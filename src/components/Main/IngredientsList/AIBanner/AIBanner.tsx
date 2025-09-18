import "./AIBanner.css";

type AIBannerProps = {
    handleRecipeShown: () => void;
}

export default function AIBanner({ handleRecipeShown }: AIBannerProps) {
    return (
        <section className="banner">
            <div className="banner-text">
                <h3 className="text-header">Ready for a recipe?</h3>
                <p className="text-content">Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={handleRecipeShown} className="banner-button">Get a recipe</button>
        </section>
    );
}
