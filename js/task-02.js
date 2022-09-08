const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listRef = document.querySelector("#ingredients");

const ingredientsItem = ingredients.map((name) => {
  const item = document.createElement("li");
  item.textContent = name;
  item.classList.add("item");
  console.log(item);
  return item;
});

console.log(ingredientsItem);

listRef.append(...ingredientsItem);
