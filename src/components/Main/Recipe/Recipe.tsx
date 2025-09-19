import './Recipe.css';
import ReactMarkdown from 'react-markdown';

type RecipeProps = {
    recipe: string
}

export default function Recipe({ recipe }: RecipeProps) {
    return (
        <section className="suggested-recipe-container" >
            <h2>Chef Claude Recommends:</h2>
            <article aria-live="polite">
                <ReactMarkdown>{recipe}</ReactMarkdown>
            </article>
        </section>
    )
}