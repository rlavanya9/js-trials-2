"use strict";


// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const idx in items) {
    console.log(items[idx] , idx);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  let result = [];

  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i]);
    }
  }
  return result;
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code

  items.sort((a,b) => a - b);
  let newItems = items.slice(0,n);
  newItems.reverse();
  console.log(newItems)
}