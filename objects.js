"use strict";


// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  const counts = {};
  for(const word of phrase.split(" ")){
    if(counts.hasOwnProperty(word)) {
      counts[word] += 1;
    }else {
      counts[word] = 1
    }
  }
  console.log(counts)
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
  const melonprices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }

  if (melonprices.hasOwnProperty(price)){
    return melonprices[price].sort()
  }
}
