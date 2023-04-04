import lodash from 'lodash';

const people = [
  {
      id: 1,
      name: 'Peter'
  },
  {
      id: 2,
      name: 'Rachel'
  },
  {
      id: 3,
      name: 'John'
  },
  {
      id: 4,
      name: 'Tim'
  },
  {
      id: 5,
      name: 'Zed'
  }
];

// same as: const alsoTim = people.find(person => person.id === 4)
const tim = lodash.find(people, person => person.id === 4);
console.log(tim);
