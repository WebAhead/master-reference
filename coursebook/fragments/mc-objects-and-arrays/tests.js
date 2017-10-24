'use strict';

var tape = require('tape');
var fns = require('./index.js');

var buildings = {
  14358: {
    address: '1010 Yorkshire Circle, Rocky Mount, North Carolina, 75141',
    rooms: 3,
    value: 450000,
  },
  98343: {
    address: '2367 Parkway Street, Palm Springs, California, 92262',
    rooms: 2,
    value: 375000,
  },
  51942: {
    address: '4079 Dola Mine Road, Raleigh, North Carolina, 27601',
    rooms: 3,
    value: 413000,
  },
  73826: {
    address: '3979 Sunrise Road, SCHELL CITY, Missouri, 64783',
    rooms: 4,
    value: 490000,
  },
  73826: {
    address: '738 Paradise Lane, Claremont, California, 91711',
    rooms: 7,
    value: 1200000,
  },
};


tape('getListOfBuildingObjects', function (t) {
  var result = fns.getListOfBuildingObjects(buildings);

  t.equal(result.length, Object.keys(buildings).length, 'Should have the right number of buildings');

  Object.keys(buildings).forEach(function (id) {
    t.ok(result.includes(buildings[id]), 'List should include building ' + id);
  });

  t.end();
});


tape('getListOfBuildingAddresses', function (t) {
  var result = fns.getListOfBuildingAddresses(buildings);

  t.equal(result.length, Object.keys(buildings).length, 'Should have the right number of buildings');

  Object.keys(buildings).forEach(function (id) {
    t.ok(result.includes(buildings[id].address), 'List should include ' + buildings[id].address);
  });

  t.end();
});


tape('filterBuildingsByMinValue', function (t) {
  t.deepEqual(
    fns.filterBuildingsByMinValue(buildings, 420000),
    {
      14358: {
        address: '1010 Yorkshire Circle, Rocky Mount, North Carolina, 75141',
        rooms: 3,
        value: 450000,
      },
      73826: {
        address: '3979 Sunrise Road, SCHELL CITY, Missouri, 64783',
        rooms: 4,
        value: 490000,
      },
      73826: {
        address: '738 Paradise Lane, Claremont, California, 91711',
        rooms: 7,
        value: 1200000,
      },
    },
    'filters out building objects w/ value < 420000'
  );

  t.deepEqual(
    fns.filterBuildingsByMinValue(buildings, 1000000),
    {
      73826: {
        address: '738 Paradise Lane, Claremont, California, 91711',
        rooms: 7,
        value: 1200000,
      },
    },
    'filters out building objects w/ value <= 1000000'
  );
  t.end();
});


tape('filterBuildingsByMaxRooms', function (t) {
  t.deepEqual(
    fns.filterBuildingsByMaxRooms(buildings, 3),
    {
      14358: {
        address: '1010 Yorkshire Circle, Rocky Mount, North Carolina, 75141',
        rooms: 3,
        value: 450000,
      },
      98343: {
        address: '2367 Parkway Street, Palm Springs, California, 92262',
        rooms: 2,
        value: 375000,
      },
      51942: {
        address: '4079 Dola Mine Road, Raleigh, North Carolina, 27601',
        rooms: 3,
        value: 413000,
      },
    },
    'filters out building objects w/ rooms >= 3'
  );
  t.end();
});


tape('addBuildingIdsToObjects', function (t) {
  t.deepEqual(
    fns.addBuildingIdsToObjects(buildings),
    {
      14358: {
        id: 14358,
        address: '1010 Yorkshire Circle, Rocky Mount, North Carolina, 75141',
        rooms: 3,
        value: 450000,
      },
      98343: {
        id: 98343,
        address: '2367 Parkway Street, Palm Springs, California, 92262',
        rooms: 2,
        value: 375000,
      },
      51942: {
        id: 51942,
        address: '4079 Dola Mine Road, Raleigh, North Carolina, 27601',
        rooms: 3,
        value: 413000,
      },
      73826: {
        id: 73826,
        address: '3979 Sunrise Road, SCHELL CITY, Missouri, 64783',
        rooms: 4,
        value: 490000,
      },
      73826: {
        id: 73826,
        address: '738 Paradise Lane, Claremont, California, 91711',
        rooms: 7,
        value: 1200000,
      },
    },
    'adds id key to each building object'
  );
  t.end();
});


tape('parseBuildingAddresses', function (t) {
  t.deepEqual(
    fns.parseBuildingAddresses(buildings),
    {
      14358: {
        address: {
          street: '1010 Yorkshire Circle',
          town: 'Rocky Mount',
          state: 'North Carolina',
          zipcode: 75141,
        },
        rooms: 3,
        value: 450000,
      },
      98343: {
        address: {
          street: '2367 Parkway Street',
          town: 'Palm Springs',
          state: 'California',
          zipcode: 92262,
        },
        rooms: 2,
        value: 375000,
      },
      51942: {
        address: {
          street: '4079 Dola Mine Road',
          town: 'Raleigh',
          state: 'North Carolina',
          zipcode: 27601,
        },
        rooms: 3,
        value: 413000,
      },
      73826: {
        address: {
          street: '3979 Sunrise Road',
          town: 'SCHELL CITY',
          state: 'Missouri',
          zipcode: 64783,
        },
        rooms: 4,
        value: 490000,
      },
      73826: {
        address: {
          street: '738 Paradise Lane',
          town: 'Claremont',
          state: 'California',
          zipcode: 91711,
        },
        rooms: 7,
        value: 1200000,
      },
    },
    'Should parse address field into object'
  );
  t.end();
});
