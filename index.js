let response;
let responseJson;

async function fetchRecipes() {
  try {
    const options = {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
      params: {
        query: "healthy",
        cuisine: "indian",
        includeIngredients: "beef, tomatoes, eggs",
        type: "main course",
        instructionsRequired: "true",
        fillIngredients: "false",
        addRecipeInformation: "true",
        maxReadyTime: "20",
        ignorePantry: "false",
        number: "10",
        limitLicense: "false",
        ranking: "1",
      },
      headers: {
        "X-RapidAPI-Key": "b94a23ccb4msh2d5b9f5673899b2p1edb79jsnc72dbb569f22",
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
    response = await axios.request(options);
    console.log(response.results[0].image);
  } catch (error) {
    console.error(error);
  }
}

// fetchRecipes();
