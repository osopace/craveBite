import { useState, useEffect } from "react";
import { useRecipes } from "../context/RecipeList";

export function useChooseCategory() {
  const { setErecipeNo, setrecipeTypes, recipeTypes } = useRecipes();
  const [loading, setLoading] = useState(false);

  const chooseCategory = (name) => {
    setLoading(true); // start loader
    setErecipeNo(5);
    setrecipeTypes(name);
  };

  // watch for recipeTypes changes
  useEffect(() => {
    if (!recipeTypes) return;

    // small delay to simulate loading (or for fetching)
    const timer = setTimeout(() => {
      setLoading(false); // stop loader after update
    }, 500);

    return () => clearTimeout(timer);
  }, [recipeTypes]);

  return { chooseCategory, loading };
}
