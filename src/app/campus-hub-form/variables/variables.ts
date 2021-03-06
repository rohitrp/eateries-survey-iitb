import { surveyOptionsMappings } from './mapping';

function assertEqualLength(arr, option) {
  if (arr.length !== Object.keys(surveyOptionsMappings[option]).length) {
    console.error(`Few '${option}' options missing`);
  }
}

const name = [
  { id: 0, value: '' }
];

const email = [
  { id: 0, value: '' }
];

const ratingOptions = [0, 1, 2, 3, 4, 5];
assertEqualLength(ratingOptions, 'ratings');

const phoneNumber = [
  { id: 0, value: '' }
];

const frequency = [
  { id: 0, value: '' }
];
const frequencyOptions = [0, 1, 2, 3];
// assertEqualLength(frequencies, 'frequencies');

const noIdeaRating = (ratingOptions.length - 1).toString();

const regularFruitJuice = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating },
  { id: 7, value: noIdeaRating },
  { id: 8, value: noIdeaRating },
  { id: 9, value: noIdeaRating },
  { id: 10, value: noIdeaRating },
  { id: 11, value: noIdeaRating },
  { id: 12, value: noIdeaRating }
];

assertEqualLength(regularFruitJuice, 'regularFruitJuice');

const mixedFruitJuice = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating },
  { id: 7, value: noIdeaRating },
  { id: 8, value: noIdeaRating },
  { id: 9, value: noIdeaRating },
  { id: 10, value: noIdeaRating }
];

assertEqualLength(mixedFruitJuice, 'mixedFruitJuice');

const iceCreamShakes = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating }
];

assertEqualLength(iceCreamShakes, 'iceCreamShakes');

const milkShakes = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating },
  { id: 7, value: noIdeaRating },
  { id: 8, value: noIdeaRating },
  { id: 9, value: noIdeaRating }
];

assertEqualLength(milkShakes, 'milkShakes');

const fruitMilkShakes = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating },
  { id: 7, value: noIdeaRating },
  { id: 8, value: noIdeaRating }
];

assertEqualLength(fruitMilkShakes, 'fruitMilkShakes');

const desserts = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating }
];

assertEqualLength(desserts, 'desserts');

const iceCreamFlavours = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating },
  { id: 7, value: noIdeaRating },
  { id: 8, value: noIdeaRating },
  { id: 9, value: noIdeaRating },
  { id: 10, value: noIdeaRating },
  { id: 11, value: noIdeaRating },
  { id: 12, value: noIdeaRating },
  { id: 13, value: noIdeaRating },
  { id: 14, value: noIdeaRating },
  { id: 15, value: noIdeaRating },
  { id: 16, value: noIdeaRating },
  { id: 17, value: noIdeaRating },
  { id: 18, value: noIdeaRating },
  { id: 19, value: noIdeaRating }
];

assertEqualLength(iceCreamFlavours, 'iceCreamFlavours');

const hotBeverages = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating }
];

assertEqualLength(hotBeverages, 'hotBeverages');

const coldBeverages = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating }
];

assertEqualLength(coldBeverages, 'coldBeverages');

const quickBites = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating },
  { id: 7, value: noIdeaRating }
];

assertEqualLength(quickBites, 'quickBites');

const miniMeals = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating },
  { id: 7, value: noIdeaRating },
  { id: 8, value: noIdeaRating },
  { id: 9, value: noIdeaRating },
  { id: 10, value: noIdeaRating },
  { id: 11, value: noIdeaRating },
  { id: 12, value: noIdeaRating },
  { id: 13, value: noIdeaRating },
  { id: 14, value: noIdeaRating },
  { id: 15, value: noIdeaRating }
];

assertEqualLength(miniMeals, 'miniMeals');

const paranthas = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating }
];

assertEqualLength(paranthas, 'paranthas');

const riceMeals = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating },
  { id: 7, value: noIdeaRating },
  { id: 8, value: noIdeaRating }
];

assertEqualLength(riceMeals, 'riceMeals');

const maggi = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating }
];

assertEqualLength(maggi, 'maggi');

const chaat = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating },
  { id: 7, value: noIdeaRating },
  { id: 8, value: noIdeaRating },
  { id: 9, value: noIdeaRating },
  { id: 10, value: noIdeaRating },
  { id: 11, value: noIdeaRating },
  { id: 12, value: noIdeaRating },
  { id: 13, value: noIdeaRating },
  { id: 14, value: noIdeaRating },
  { id: 15, value: noIdeaRating },
  { id: 16, value: noIdeaRating },
  { id: 17, value: noIdeaRating },
  { id: 18, value: noIdeaRating },
  { id: 19, value: noIdeaRating },
  { id: 20, value: noIdeaRating },
  { id: 21, value: noIdeaRating }
];

assertEqualLength(chaat, 'chaat');

const chinese = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating },
  { id: 7, value: noIdeaRating },
  { id: 8, value: noIdeaRating },
  { id: 9, value: noIdeaRating }
];

assertEqualLength(chinese, 'chinese');

const extras = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating }
];

assertEqualLength(extras, 'extras');

const sandwich = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating },
  { id: 7, value: noIdeaRating },
  { id: 8, value: noIdeaRating },
  { id: 9, value: noIdeaRating },
  { id: 10, value: noIdeaRating },
  { id: 11, value: noIdeaRating },
  { id: 12, value: noIdeaRating },
  { id: 13, value: noIdeaRating },
  { id: 14, value: noIdeaRating },
  { id: 15, value: noIdeaRating },
  { id: 16, value: noIdeaRating },
  { id: 17, value: noIdeaRating },
  { id: 18, value: noIdeaRating },
  { id: 19, value: noIdeaRating },
  { id: 20, value: noIdeaRating },
  { id: 21, value: noIdeaRating }
];

assertEqualLength(sandwich, 'sandwich');

const frankie = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating },
  { id: 7, value: noIdeaRating },
  { id: 8, value: noIdeaRating },
  { id: 9, value: noIdeaRating },
  { id: 10, value: noIdeaRating }
];

assertEqualLength(frankie, 'frankie');

const hygieneOfItems = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating }
];
assertEqualLength(hygieneOfItems, 'hygieneOfItems');

const absenceMenuItemTimes = [
  { id: 0, value: '' }
];
const absenceMenuItemTimesOptions = [0, 1, 2];
assertEqualLength(absenceMenuItemTimesOptions, 'absenceMenuItemTimes');

const otherParameters = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating }
];
assertEqualLength(otherParameters, 'otherParameters');

const otherSuggestions = [
  { id: 0, value: '' }
];

export {
  name,
  email,
  ratingOptions,
  phoneNumber,
  frequency,
  frequencyOptions,
  regularFruitJuice,
  mixedFruitJuice,
  iceCreamShakes,
  milkShakes,
  fruitMilkShakes,
  desserts,
  iceCreamFlavours,
  hotBeverages,
  coldBeverages,
  quickBites,
  miniMeals,
  paranthas,
  riceMeals,
  maggi,
  chaat,
  chinese,
  extras,
  sandwich,
  frankie,
  hygieneOfItems,
  absenceMenuItemTimes,
  absenceMenuItemTimesOptions,
  otherParameters,
  otherSuggestions
};
