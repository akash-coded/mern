/**
 * Example-1
 */

const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

/**
 * Example-2
 */

const items = ["item1", "item2", "item3"];

// before
const copyItems = [];
for (let item of items) {
  copyItems.push(item);
}
console.table(copyItems);

// after
const copyItems2 = [];
items.forEach((item) => {
  copyItems2.push(item);
});
console.table(copyItems2);
