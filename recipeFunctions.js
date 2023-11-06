//=====================================================================//
// Clear the header and image containers
//=====================================================================//

export function clearPage() {
  const headerElements = document.querySelectorAll(".headerline");
  headerElements.forEach((element) => {
    element.setAttribute("id", "invisible");
  });

  const imgElements = document.querySelectorAll(".imgContainer");
  imgElements.forEach((element) => {
    element.setAttribute("id", "invisible");
  });
  //=====================================================================//
  // Create and configure the homeButton to refresh page
  //=====================================================================//
  const homeButton = document.getElementById("home");
  homeButton.setAttribute("id", "homeButton");
}

//=====================================================================//
// Get user input data
//=====================================================================//
let query;
let cuisine;
let ingredients;

export function getUserInput() {
  query = document.getElementById("query").value;
  if (query === "") {
    query = "Delicious";
  }
  cuisine = document.getElementById("cuisine").value;
  ingredients = document.getElementById("ingredients").value;

  return { query, cuisine, ingredients };
}

//=====================================================================//
// HTTP Request using Axios - POST method
//=====================================================================//

export async function postCookingInstruction(instructionForAnalysis) {
  const encodedParams = new URLSearchParams();
  encodedParams.set("instructions", instructionForAnalysis);

  const options = {
    method: "POST",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/analyzeInstructions",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "b94a23ccb4msh2d5b9f5673899b2p1edb79jsnc72dbb569f22",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
