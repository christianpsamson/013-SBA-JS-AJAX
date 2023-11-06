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

export function getUserInput() {
  let query = document.getElementById("query").value;
  if (query === "") {
    query = "Delicious";
  }
  let cuisine = document.getElementById("cuisine").value;
  let ingredients = document.getElementById("ingredients").value;
}
