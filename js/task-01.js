const listRef = document.querySelector("#categories");
const categoryCount = `Number of categories: ${listRef.children.length}`;
console.log(categoryCount);

const listItemref = listRef.children;

function getInfoItem(arr) {
  for (const elem of arr) {
    const nameElem = `Category: ${elem.firstElementChild.textContent}`;
    console.log(nameElem);
    const countElem = `Elements: ${elem.lastElementChild.children.length}`;
    console.log(countElem);
  }
}
getInfoItem(listItemref);
