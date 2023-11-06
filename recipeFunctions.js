export function clearFirstPage() {
  console.log("It worked");
  const headerElements = document.querySelectorAll(".headerline");
  headerElements.forEach((element) => {
    element.setAttribute("id", "invisible");
  });
}
