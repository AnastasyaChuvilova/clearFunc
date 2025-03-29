import healthCheck from '../game';

const cases = [[200, 'healthy', { name: 'Selegon', health: 200 }], [25, 'wounded', { name: 'Selegon', health: 25 }], [2, 'critical', { name: 'Selegon', health: 2 }]];

test.each(cases)(
  'Персонаж со здоровьем %i должен быть %s',
  (health, expected, character) => {
    const result = healthCheck(character);
    expect(result).toBe(expected);
  },
);
