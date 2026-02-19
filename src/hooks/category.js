import { useRecipes } from "../context/RecipeList";

export function useChooseCategory() {
  const { setErecipeNo, setrecipeTypes, recipes } = useRecipes();

  const chooseCategory = (name) => {
    setErecipeNo(5);
    setrecipeTypes(name);
    console.log(recipes);
  };

  return { chooseCategory };
}
