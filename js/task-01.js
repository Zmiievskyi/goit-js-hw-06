const categorEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categorEl.length}`);
[...categorEl].forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
