import { t } from "i18next";

const SYSTEM_PROMPT = t("systemPrompt");
console.log(SYSTEM_PROMPT);

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
                { role: "user", content: `${t("iHave")} ${ingredientsString}. ${t("giveMeARecipe")}` },
            ],
            max_tokens: 1024,
        }),
    });

    if (!response.ok) throw new Error("Falha ao gerar receita");

    const data = await response.json();
    return data.choices[0].message.content;
}
