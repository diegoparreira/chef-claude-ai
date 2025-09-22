import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            headerBrand: "Chef Claude",
            addIngredient: "Add ingredient",
            ingredientPlaceholder: "e.g. oregano",
            ingredientsHeader: "Ingredients on hand:",
            aiHeader: "Ready for a recipe?",
            aiParagraph: "Generate a recipe from your list of ingredients.",
            aiButton: "Get a recipe.",
            aiRecipeHeader: "Chef Claude Recommends:",
            systemPrompt:
                "You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page",
            iHave: "I have",
            giveMeARecipe: "Please give me a recipe!",
        },
    },
    "pt-BR": {
        translation: {
            headerBrand: "Chef Claudio",
            addIngredient: "Adicionar ingrediente",
            ingredientPlaceholder: "e.g. mamão",
            ingredientsHeader: "Ingredients a mão:",
            aiHeader: "Pronto para uma receita?",
            aiParagraph: "Gerar uma receita a partir da sua lista de ingredientes.",
            aiButton: "Gerar receita.",
            aiRecipeHeader: "Chef Claude Recomenda:",
            systemPrompt:
                "Você é um assistente que recebe uma lista de ingredientes de um usuário e sugere uma receita que ele pode fazer com alguns ou todos esses ingredientes. Você não precisa usar todos os ingredientes mencionados na sua receita. A receita pode incluir ingredientes adicionais que ele não mencionou, mas tente não incluir muitos ingredientes extras. Formate sua resposta em markdown para facilitar a renderização em uma página da web.",
            iHave: "Eu tenho",
            giveMeARecipe: "Por favor me de uma receita!",
        },
    },
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"],
        },
    });

export default i18n;
