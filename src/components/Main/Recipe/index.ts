const FUNCTION_URL = import.meta.env.VITE_GET_RECIPE_FUNCTION;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!FUNCTION_URL) {
    throw new Error("VITE_GET_RECIPE_FUNCTION is not configured. Please check your environment variables.");
}

if (!SUPABASE_KEY) {
    throw new Error("VITE_SUPABASE_ANON_KEY is not configured. Please check your environment variables.");
}

export async function getRecipeFromMistral(ingredientsArr: string[], systemPrompt: string, userPrompt: string) {
    try {
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
                    { role: "system", content: systemPrompt },
                    { role: "user", content: `${userPrompt} ${ingredientsString}` },
                ],
                max_tokens: 1024,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.choices || !data.choices[0]?.message?.content) {
            throw new Error("Invalid response format from API");
        }

        return data.choices[0].message.content;
    } catch (error) {
        console.error("Error fetching recipe:", error);

        if (error instanceof TypeError && error.message.includes("fetch")) {
            throw new Error("Network error. Please check your connection.");
        }

        throw error;
    }
}
