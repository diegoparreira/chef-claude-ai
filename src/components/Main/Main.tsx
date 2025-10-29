import { useEffect, useRef, useState } from 'react';
import IngredientForm from './IngredientForm/IngredientForm';
import IngredientsList from './IngredientsList/IngredientsList';
import './Main.css';
import Recipe from './Recipe/Recipe';
import { getRecipeFromMistral } from './Recipe';
import Spinner from '../Spinner/Spinner';
import { useTranslation } from 'react-i18next';

export default function Main() {
    const { i18n } = useTranslation();
    const recipeRef = useRef<HTMLDivElement>(null);

    const [ingredients, setIngredients] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [recipe, setRecipe] = useState<string>('');

    useEffect(function () {
        if (recipe) recipeRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [recipe])

    useEffect(function () {
        clearAll();
    }, [i18n.language])

    function addIngredient(newIngredient: string) {
        setIngredients(prevList => [...prevList, newIngredient]);
    }

    function removeIngredient(index: number) {
        setIngredients(prevList => prevList.filter((_, i) => i !== index));
        setRecipe("");
    }

    function clearAll() {
        setIngredients([]);
        setRecipe('');
    }

    async function getRecipeFromAI() {
        setIsLoading(true);
        const recipe = await getRecipeFromMistral(ingredients);
        setRecipe(recipe);
        setIsLoading(false);
    }

    return (
        <main className="main-container">
            <IngredientForm add={addIngredient} isLoading={isLoading} />
            {ingredients.length > 0 && (
                <IngredientsList ingredients={ingredients} isLoading={isLoading} removeItem={removeIngredient} getRecipeFromAI={getRecipeFromAI} />
            )}
            {isLoading && !recipe && <Spinner />}
            {recipe ? <Recipe ref={recipeRef} recipe={recipe} /> : null}
        </main>
    )
}