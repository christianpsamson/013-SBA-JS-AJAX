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
