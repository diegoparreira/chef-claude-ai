import './IngredientForm.css';

type IngredientFormProps = {
    add: (ingredient: string) => void;
}

export default function IngredientForm({ add }: IngredientFormProps) {

    function handleSubmit(formData: FormData) {
        const newIngredient: string = String(formData.get('ingredient'));

        if (newIngredient) {
            add(newIngredient);
        }

        console.log(`This is the ingredient you have inputed: ${newIngredient}`);
    }

    return (
        <form action={(formData) => handleSubmit(formData)} className='add-ingredient-form'>
            <input
                aria-label='Add ingredient'
                type="text"
                name="ingredient"
                id="ingredient"
                placeholder='e.g. oregano'
                className='input-text'
            />
            <button
                type="submit"
                className='input-button'
            >
                Add ingredient
            </button>
        </form>
    )
}