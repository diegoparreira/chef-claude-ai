import './IngredientsList.css';
import AIBanner from './AIBanner/AIBanner';
import { t } from 'i18next';

type IngredientsListProps = {
    ingredients: string[];
    removeItem: (index: number) => void;
    getRecipeFromAI: () => void;
}

export default function IngredientsList({ ingredients, removeItem, getRecipeFromAI }: IngredientsListProps) {

    const listItems = ingredients.map((item, index) => (
        <li key={index} className="ingredients-list-item" onClick={() => removeItem(index)}>{item}</li>
    ));

    return (
        <section className="ingredients-list-container">
            <h2 className="ingredients-list-header">{t('ingredientsHeader')}</h2>
            <ul className="ingredients-list">
                {listItems}
            </ul>
            {ingredients.length > 1 ? <AIBanner getRecipeFromAI={getRecipeFromAI} /> : null}
        </section>
    )
}