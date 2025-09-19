const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

const FUNCTION_URL = import.meta.env.VITE_SUPABASE_URL
    ? `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/huggingface-proxy`
    : "http://localhost:58321/functions/v1/huggingface-proxy";

export async function getRecipeFromMistral(ingredientsArr: string[]) {
    const ingredientsString = ingredientsArr.join(", ");

    const response = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe!` },
            ],
            max_tokens: 1024,
        }),
    });

    if (!response.ok) throw new Error("Falha ao gerar receita");

    const data = await response.json();
    return data.choices[0].message.content;
}
