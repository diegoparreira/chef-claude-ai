import { useTranslation } from 'react-i18next';
import './IngredientForm.css';

type IngredientFormProps = {
    add: (ingredient: string) => void;
    isLoading: boolean;
}

export default function IngredientForm({ add, isLoading }: IngredientFormProps) {
    const { t } = useTranslation();

    function handleSubmit(formData: FormData) {
        const newIngredient: string = String(formData.get('ingredient'));

        if (newIngredient) {
            add(newIngredient);
        }
    }

    return (
        <form action={(formData) => handleSubmit(formData)} className='add-ingredient-form'>
            <input
                aria-label={t('addIngredient')}
                type="text"
                name="ingredient"
                id="ingredient"
                placeholder={t('ingredientPlaceholder')}
                className='input-text'
            />
            <button
                disabled={isLoading}
                type="submit"
                className={`input-button ${isLoading ? 'loading' : ''}`}
            >
                {isLoading ? '' : t('addIngredient')}
            </button>
        </form>
    )
}