# Chef Claude AI

Chef Claude AI is a React + TypeScript single-page application that helps users generate creative recipes based on ingredients they have on hand. It leverages AI (Mistral via Hugging Face) and Supabase edge functions to suggest recipes, with a clean, modern UI built using Vite.

## Features

-   Add ingredients to your list
-   Remove ingredients with a click
-   Generate recipes using AI (Mistral model)
-   **Multi-language support (English/Portuguese)**
-   **Language switcher with flag indicators**
-   Responsive, user-friendly interface
-   Markdown rendering for recipe formatting

## Demo

![Chef Claude Screenshot](src/assets/chef-claude-icon.png)

## Getting Started

### Prerequisites

-   Node.js (v18+ recommended)
-   npm

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/chef-claude-ai.git
    cd chef-claude-ai
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the project root:

    ```
    VITE_HF_ACCESS_TOKEN=your_huggingface_access_token
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    VITE_SUPABASE_URL=your_supabase_url
    ```

### Running Locally

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Usage

1. Enter ingredients in the input field and add them to your list.
2. Click on an ingredient to remove it.
3. When you have at least two ingredients, click "Get a recipe" to generate a recipe suggestion.
4. The recipe will be displayed in markdown format.
5. **Use the language toggle in the header to switch between English and Portuguese.**

## Project Structure

```
src/
  App.tsx
  main.tsx
  i18n/
    index.ts
  contexts/
    LanguageContext.tsx
  components/
    Header/
    Main/
      IngredientForm/
      IngredientsList/
        AIBanner/
      Recipe/
  assets/
public/
```

## Internationalization

The app supports multiple languages using **react-i18next**:

-   **English (🇺🇸)** - Default language
-   **Portuguese (🇧🇷)** - Brazilian Portuguese

### Supported Languages

Language detection is automatic based on browser settings, with a manual toggle available in the header.

### Adding New Languages

1. Add the language to the `languages` array in `src/contexts/LanguageContext.tsx`
2. Add translation resources in `src/i18n/index.ts`
3. The language switcher will automatically include the new language

## Environment Variables

-   `VITE_HF_ACCESS_TOKEN`: Hugging Face API token (required for AI model access)
-   `VITE_SUPABASE_ANON_KEY`: Supabase anonymous key
-   `VITE_SUPABASE_URL`: Supabase project URL

**Note:** All Vite environment variables must be prefixed with `VITE_`.

## Dependencies

-   React
-   React DOM
-   React Markdown
-   Vite
-   TypeScript
-   **react-i18next** - Internationalization
-   **i18next** - Translation framework
-   **i18next-browser-languagedetector** - Language detection
-   @huggingface/inference
-   Supabase (via edge function proxy)

## License

MIT
