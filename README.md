# Recipe-Finder
 A simple recipe search application built with React that uses TheMealDB API
 to fetch and display recipes. Users can search for meals by ingredient, view meal details, ingredients, measurements, and step-by-step cooking instructions.

# Functionality
 Search Recipes by Ingredient – Enter any ingredient to find related meals.

 Recipe Thumbnails – Display images of meals in the search results.

 Detailed Recipe View – Click on a recipe to see:

Meal image

Name, category, and cuisine (area)

Ingredients + measurements

Step-by-step cooking instructions

Responsive UI – Works on desktop and mobile.

#Folderstructure
src/
├── components/
│   ├── SearchBar.jsx
│   ├── RecipeCard.jsx
│   └── ReceipieDetails.jsx
├── App.jsx
├── main.jsx
├── index.css





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
