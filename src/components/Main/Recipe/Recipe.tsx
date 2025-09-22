import './Recipe.css';
import ReactMarkdown from 'react-markdown';

type RecipeProps = {
    recipe: string
    ref: React.RefObject<HTMLDivElement | null>
}

export default function Recipe({ ref, recipe }: RecipeProps) {
    return (
        <section ref={ref} className="suggested-recipe-container" >
            <h2>Chef Claude Recommends:</h2>
            <article aria-live="polite">
                <ReactMarkdown>{recipe}</ReactMarkdown>
            </article>
        </section>
    )
}