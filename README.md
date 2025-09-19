# Chef Claude AI

Chef Claude AI is a React + TypeScript single-page application that helps users generate creative recipes based on ingredients they have on hand. It leverages AI (Mistral via Hugging Face) and Supabase edge functions to suggest recipes, with a clean, modern UI built using Vite.

## Features

-   Add ingredients to your list
-   Remove ingredients with a click
-   Generate recipes using AI (Mistral model)
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

## Project Structure

```
src/
  App.tsx
  main.tsx
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
-   @huggingface/inference
-   Supabase (via edge function proxy)

## License

MIT
