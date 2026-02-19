import { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Create the context
const RecipeContext = createContext(null);

// 2️⃣ Provider component
export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recipeNo, setErecipeNo] = useState(1);
  const [recipeTypes, setrecipeTypes] = useState("soup");

  // const apiKey = "ca64f65e7e7f46be9df62cf6f6d8a8f6";
  const apiKey = "ca64f65e7e7f46be9df62cf6f6d8a8f";
  const url = `https://api.spoonacular.com/recipes/random?number=${recipeNo}&tags=${recipeTypes}&&excludeIngredients=quinoa&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          const stored = localStorage.getItem("data");
          const data = stored ? JSON.parse(stored) : { recipes: [] };
          setRecipes(data.recipes || []);
          throw new Error("Failed to fetch recipes");
        }

        if (response) {
          const data = await response.json();
          localStorage.setItem("data", JSON.stringify(data));
          setRecipes(data.recipes || []);
        }

        // const response = await fetch(url);
        // if (!response.ok) {
        //   const stored = localStorage.getItem("data");
        //   const data = stored ? JSON.parse(stored) : { recipes: [] };

        //   console.log(data);
        //   setRecipes(data.recipes || []);
        // }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [url, recipeTypes]);

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        loading,
        error,
        recipeNo,
        setErecipeNo,
        recipeTypes,
        setrecipeTypes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

// 3️⃣ Hook to use the context
export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipes must be used inside RecipeProvider");
  }
  return context;
};
