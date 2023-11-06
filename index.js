import * as recipe from "./recipeFunctions.js";

//=====================================================================//
// Global variables
//=====================================================================//
let response;

//=====================================================================//
// HTTP request using Axios
//=====================================================================//
async function fetchRecipes(event) {
  event.preventDefault();
  recipe.clearPage();
  const userInput = recipe.getUserInput();

  try {
    const options = {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
      params: {
        query: userInput.query,
        cuisine: userInput.cuisine,
        includeIngredients: userInput.ingredients,
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
    //=====================================================================//
    // The status range of 200 to 299 indicates a successful request
    //=====================================================================//
    if (response.status >= 200 && response.status < 300) {
      for (let i = 0; i < response.data.results.length; i++) {
        let title = response.data.results[i].title;
        let prepTime = response.data.results[i].preparationMinutes;
        let cookTime = response.data.results[i].cookingMinutes;
        let imgURL = response.data.results[i].image;
        let summary = response.data.results[i].summary;

        //=====================================================================//
        // DOM manipulation: recipe title
        //=====================================================================//
        const recipeContainer = document.querySelector(".recipeContainer");
        const h2 = document.createElement("h2");
        h2.classList.add("recipe", "recipeTitle");
        h2.textContent = title;

        //=====================================================================//
        // DOM manipulation: prep & cooking time
        //=====================================================================//
        const p = document.createElement("p");
        p.classList.add("recipe", "recipeTime");
        p.textContent = `Prep Time: ${prepTime} minutes; Cooking Time: ${cookTime} minutes`;

        //=====================================================================//
        // DOM manipulation: prep & cooking time
        //=====================================================================//
        const img = document.createElement("img");
        img.classList.add("recipe", "recipeImg");
        img.src = imgURL;
        img.alt = title;

        //=====================================================================//
        // DOM manipulation: steps header
        //=====================================================================//
        const h3Steps = document.createElement("h3");
        h3Steps.classList.add("recipe", "recipeSteps");
        h3Steps.textContent = "Steps";

        //=====================================================================//
        // DOM manipulation: ordered list
        //=====================================================================//
        const ol = document.createElement("ol");
        ol.classList.add("recipe", "recipeOl");

        //=====================================================================//
        // DOM manipulation: append recipeContainer
        //=====================================================================//
        recipeContainer.appendChild(h2);
        recipeContainer.appendChild(p);
        recipeContainer.appendChild(img);
        recipeContainer.appendChild(h3Steps);
        recipeContainer.appendChild(ol);
        //=====================================================================//
        // DOM manipulation: load the steps into list, with error handling
        //=====================================================================//
        let stepsLength = 0;

        if (
          response.data.results[i].analyzedInstructions &&
          response.data.results[i].analyzedInstructions.length > 0 &&
          response.data.results[i].analyzedInstructions[0].steps
        ) {
          stepsLength =
            response.data.results[i].analyzedInstructions[0].steps.length;
        }

        if (stepsLength > 0) {
          for (let x = 0; x < stepsLength; x++) {
            let step =
              response.data.results[i].analyzedInstructions[0].steps[x].step;

            const li = document.createElement("li");
            li.classList.add("recipe", "recipeLi");
            li.textContent = step;
            ol.appendChild(li);
          }
        } else {
          const errorMsgSteps = document.createElement("p");
          errorMsgSteps.classList.add("recipe");
          errorMsgSteps.textContent =
            "No steps are available at the moment. Please checkout the other recipes.";
          errorMsgSteps.style = "font-style: italic";
          recipeContainer.appendChild(errorMsgSteps);
        }

        //=====================================================================//
        // DOM manipulation: for the horizontal line
        //=====================================================================//
        const horizontal = document.createElement("hr");
        recipeContainer.appendChild(horizontal);
  
      }
    } else {
      throw new Error(
        "Network response was not OK. Status: " + response.status
      );
    }
  } catch (error) {
    console.error(error);
  }
}

//=====================================================================//
// Event Handler for Submit
//=====================================================================/
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", fetchRecipes);
