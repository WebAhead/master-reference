/*
 * Morning Challenge
 * Objects, Arrays and Array methods
 *
 * Your task is to complete as many of the functions below as you can, using the
 * instructions provided in the comments.
 *
 * The following is NOT ALLOWED:
 * > `for` loops
 * > `while` loops
 * > `Array.push`
 * > The `delete` keyword
 *
 * Instead, try to use array methods like `.map`, `.filter` and `.reduce`
 *
 * The purpose of this challenge is to get used to manipulating data, and also
 * to get used to using array methods.
 */
'use strict';

// INSTRUCTIONS
// DO NOT UNCOMMENT THIS CODE
//
// All the functions you must write will take as one of their arguments an
// Object. This object contains some information about some buildings. The key
// of the object will be the ID of the building, and the value will be an object
// with various properties describing the building. You can see an example of
// what this object looks like below:
//
//
// var buildings = {
//   14358: {
//     address: '1010 Yorkshire Circle, Rocky Mount, North Carolina, 75141',
//     rooms: 3,
//     value: 450000,
//   },
//   98343: {
//     address: '2367 Parkway Street, Palm Springs, California, 92262',
//     rooms: 2,
//     value: 375000,
//   },
//   ...
//   01942: {
//     address: '4079 Dola Mine Road, Raleigh, North Carolina, 27601',
//     rooms: 3,
//     value: 413000,
//   },
//   73826: {
//     address: '3979 Sunrise Road, SCHELL CITY, Missouri, 64783',
//     rooms: 4,
//     value: 490000,
//   },
//   73826: {
//     address: '738 Paradise Lane, Claremont, California, 91711',
//     rooms: 7,
//     value: 1200000,
//   },
// };
//
// This is just an example, but you can use it to decide how you will complete
// the functions below.


// This function should take the buildings object (`bldngs`) and return an array
// of objects that each describe a building. Using the `buildings` object above
// as an example input, this function would return:
// [
//   {
//     address: '1010 Yorkshire Circle, Rocky Mount, North Carolina, 75141',
//     rooms: 3,
//     value: 450000,
//   },
//   98343: {
//     address: '2367 Parkway Street, Palm Springs, California, 92262',
//     rooms: 2,
//     value: 375000,
//   },
//   ...
// ]
function getListOfBuildingObjects(bldngs) {
  return Object.keys(bldngs).map(function (id) { return bldngs[id]; });
}


// This function should take the buildings object (`bldngs`) and return an array
// of strings where each string is the building address. Using the `buildings`
// object above as an example input, this function would return:
// [
//   '1010 Yorkshire Circle, Rocky Mount, North Carolina, 75141',
//   '2367 Parkway Street, Palm Springs, California, 92262',
//   ...
// ]
function getListOfBuildingAddresses(bldngs) {
  return Object.keys(bldngs).map(function (id) { return bldngs[id].address; });
}


// This function should take the buildings object (`bldngs`) and a number
// (`minValue`), and should return an object that contains only those buildings
// that have a value at least as big as that given in `minValue`.
//
// Using the `buildings` object above as an example input, and assuming
// `minValue` = 400000, this function should return:
//
// {
//   14358: {
//     address: '1010 Yorkshire Circle, Rocky Mount, North Carolina, 75141',
//     rooms: 3,
//     value: 450000,
//   },
// }
function filterBuildingsByMinValue(bldngs, minValue) {
  return Object.keys(bldngs)
    .filter(function (id) { return bldngs[id].value >= minValue; })
    .reduce(function (acc, id) {
      acc[id] = bldngs[id];
      return acc;
    }, {});
}


// This function should take the buildings object (`bldngs`) and a number
// (`maxRooms`), and should return an object that contains only those buildings
// that have a number of rooms no bigger than `maxRooms`.
//
// Using the `buildings` object above as an example input, and assuming
// `maxRooms` = 2, this function should return:
//
// {
//   98343: {
//     address: '2367 Parkway Street, Palm Springs, California, 92262',
//     rooms: 2,
//     value: 375000,
//   },
// }
function filterBuildingsByMaxRooms(bldngs, maxRooms) {
  return Object.keys(bldngs)
    .filter(function (id) { return bldngs[id].rooms <= maxRooms; })
    .reduce(function (acc, id) {
      acc[id] = bldngs[id];
      return acc;
    }, {});
}


// This function should take the buildings object (`bldngs`), and should return
// an object that contains all the buildings objects, with an extra key added
// called `id`, whose value is the top-level key of the object.
//
// Using the `buildings` object above as an example input, this function should
// return:
//
// {
//   14358: {
//     id: 14358,
//     address: '1010 Yorkshire Circle, Rocky Mount, North Carolina, 75141',
//     rooms: 3,
//     value: 450000,
//   },
//   98343: {
//     id: 98343,
//     address: '2367 Parkway Street, Palm Springs, California, 92262',
//     rooms: 2,
//     value: 375000,
//   },
// }
function addBuildingIdsToObjects(bldngs) {
  return Object.keys(bldngs)
    .reduce(function (acc, id) {
      return Object.assign(acc, { [id]: Object.assign({ id: +id }, bldngs[id]) });
    }, {});
}


// This function should take the buildings object (`bldngs`), and should return
// an object that contains all the buildings objects, but where the value of the
// `address` key is an object, whose keys are `street`, `town`, `state` and
// `zipcode`.
//
// Using the `buildings` object above as an example input, this function should
// return:
//
// {
//   14358: {
//     address: {
//       street: '1010 Yorkshire Circle',
//       town: 'Rocky Mount',
//       state: 'North Carolina',
//       zipcode: 75141,
//     },
//     rooms: 3,
//     value: 450000,
//   },
//   98343: {
//     address: {
//       street: '2367 Parkway Street',
//       town: 'Palm Springs',
//       state: 'California',
//       zipcode: 92262,
//     },
//     rooms: 2,
//     value: 375000,
//   },
// }
function parseBuildingAddresses(bldngs) {
  return Object.keys(bldngs)
    .reduce(function (acc, id) {
      var addressParts = bldngs[id].address.split(',').map(function (s) { return s.trim(); });
      var addressObject = {
        street: addressParts[0],
        town: addressParts[1],
        state: addressParts[2],
        zipcode: +addressParts[3],
      };
      return Object.assign(acc, { [id]: Object.assign({}, bldngs[id], { address: addressObject }) });
    }, {});
}


module.exports = {
  getListOfBuildingObjects,
  getListOfBuildingAddresses,
  filterBuildingsByMinValue,
  filterBuildingsByMaxRooms,
  addBuildingIdsToObjects,
  parseBuildingAddresses,
};
