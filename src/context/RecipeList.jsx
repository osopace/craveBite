import { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Create the context
const RecipeContext = createContext(null);

// 2️⃣ Provider component
export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recipeNo, setErecipeNo] = useState(4);
  const [recipeTypes, setrecipeTypes] = useState("soup");
  const apiKey1 = import.meta.env.VITE_API_KEY;
  const apiKey2 = import.meta.env.VITE_API_KEY_1;

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);

        const tryFetch = async (apiKey) => {
          const url = `https://api.spoonacular.com/recipes/random?number=${recipeNo}&tags=${recipeTypes}&excludeIngredients=quinoa&apiKey=${apiKey}`;
          return await fetch(url);
        };

        let response = await tryFetch(apiKey1);

        // Fallback to second key on 401
        if (response.status === 401 && apiKey2) {
          console.warn("Primary key failed, trying backup key...");
          response = await tryFetch(apiKey2);
        }

        if (!response.ok) {
          const stored = localStorage.getItem("data");
          const data = stored ? JSON.parse(stored) : { recipes: [] };
          setRecipes(data.recipes || []);
          throw new Error("Failed to fetch recipes");
        }

        const data = await response.json();
        localStorage.setItem("data", JSON.stringify(data));
        setRecipes(data.recipes || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeTypes]);
  // }

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
