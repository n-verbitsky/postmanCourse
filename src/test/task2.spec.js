const { assert } = require('chai');
const { describe, it } = require('mocha');
const { extractSmallPlanets, extractBigPlanets, planets } = require('../main/homeworks/homework1/task2');

const smallPlanets = [
  {
    name: 'Hoth',
    rotation_period: '23',
    orbital_period: '549',
    diameter: '7200',
    climate: 'frozen',
    gravity: '1.1 standard',
    terrain: 'tundra, ice caves, mountain ranges',
    surface_water: '100',
    population: 'unknown',
    url: 'https://swapi.co/api/planets/4/',
  },
  {
    name: 'Dagobah',
    rotation_period: '23',
    orbital_period: '341',
    diameter: '8900',
    climate: 'murky',
    gravity: 'N/A',
    terrain: 'swamp, jungles',
    surface_water: '8',
    population: 'unknown',
    url: 'https://swapi.co/api/planets/5/',
  },
  {
    name: 'Endor',
    rotation_period: '18',
    orbital_period: '402',
    diameter: '4900',
    climate: 'temperate',
    gravity: '0.85 standard',
    terrain: 'forests, mountains, lakes',
    surface_water: '8',
    population: '30000000',
    url: 'https://swapi.co/api/planets/7/',
  },
];

const bigPlanets = [
  {
    name: 'Alderaan',
    rotation_period: '24',
    orbital_period: '364',
    diameter: '12500',
    climate: 'temperate',
    gravity: '1 standard',
    terrain: 'grasslands, mountains',
    surface_water: '40',
    population: '2000000000',
    url: 'https://swapi.co/api/planets/2/',
  },
  {
    name: 'Yavin IV',
    rotation_period: '24',
    orbital_period: '4818',
    diameter: '10200',
    climate: 'temperate, tropical',
    gravity: '1 standard',
    terrain: 'jungle, rainforests',
    surface_water: '8',
    population: '1000',
    url: 'https://swapi.co/api/planets/3/',
  },
  {
    name: 'Bespin',
    rotation_period: '12',
    orbital_period: '5110',
    diameter: '118000',
    climate: 'temperate',
    gravity: '1.5 (surface), 1 standard (Cloud City)',
    terrain: 'gas giant',
    surface_water: '0',
    population: '6000000',
    url: 'https://swapi.co/api/planets/6/',
  },
  {
    name: 'Naboo',
    rotation_period: '26',
    orbital_period: '312',
    diameter: '12120',
    climate: 'temperate',
    gravity: '1 standard',
    terrain: 'grassy hills, swamps, forests, mountains',
    surface_water: '12',
    population: '4500000000',
    url: 'https://swapi.co/api/planets/8/',
  },
  {
    name: 'Coruscant',
    rotation_period: '24',
    orbital_period: '368',
    diameter: '12240',
    climate: 'temperate',
    gravity: '1 standard',
    terrain: 'cityscape, mountains',
    surface_water: 'unknown',
    population: '1000000000000',
    url: 'https://swapi.co/api/planets/9/',
  },
  {
    name: 'Kamino',
    rotation_period: '27',
    orbital_period: '463',
    diameter: '19720',
    climate: 'temperate',
    gravity: '1 standard',
    terrain: 'ocean',
    surface_water: '100',
    population: '1000000000',
    url: 'https://swapi.co/api/planets/10/',
  },
  {
    name: 'Geonosis',
    rotation_period: '30',
    orbital_period: '256',
    diameter: '11370',
    climate: 'temperate, arid',
    gravity: '0.9 standard',
    terrain: 'rock, desert, mountain, barren',
    surface_water: '5',
    population: '100000000000',
    url: 'https://swapi.co/api/planets/11/',
  },
];

describe('Task 2 Test Suite', () => {
  it('extractSmallPlanets returns small planets', () => {
    assert.sameDeepMembers(extractSmallPlanets(planets, 10000), smallPlanets, 'Array should contain small planets');
  });

  it('extractBigPlanets returns big planets', () => {
    assert.sameDeepMembers(extractBigPlanets(planets, 10000), bigPlanets, 'Array should contain big planets');
  });
});
