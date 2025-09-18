import { useRef, useState } from 'react';
import IngredientForm from './IngredientForm/IngredientForm';
import IngredientsList from './IngredientsList/IngredientsList';
import './Main.css';
import Recipe from './Recipe/Recipe';

export default function Main() {
    const recipeRef = useRef<HTMLDivElement>(null);

    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipeShown, setRecipeShown] = useState<boolean>(false);

    function addIngredient(newIngredient: string) {
        setIngredients(prevList => [...prevList, newIngredient]);
    }

    function removeIngredient(index: number) {
        setIngredients(prevList => prevList.filter((_, i) => i !== index));
    }

    function handleRecipeShown() {
        setRecipeShown(true);
        setTimeout(() => {
            recipeRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 5)
    }

    return (
        <main className="main-container">
            <IngredientForm add={addIngredient} />
            {ingredients.length > 0 && (
                <IngredientsList ingredients={ingredients} removeItem={removeIngredient} handleRecipeShown={handleRecipeShown} />
            )}
            {recipeShown ? <div ref={recipeRef}><Recipe /></div> : null}
        </main>
    )
}