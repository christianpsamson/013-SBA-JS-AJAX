export const clearFirstPage = () => {
  const headerElements = document.querySelectorAll(".headerline");
  headerElements.forEach((element) => {
    element.id = "invisible";
  });
};
