const elementsCategories = document.querySelectorAll("#categories > li");
elementsCategories.forEach((element) => {
  const elementItem = element.querySelector("h2");
  const elementList = element.querySelectorAll("ul > li");
  console.log(`Category: ${elementItem.textContent}`);
  console.log(`Elements: ${elementList.length}`);
});
