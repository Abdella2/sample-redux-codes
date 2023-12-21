import { Map } from 'immutable';

const employee = { name: 'john' };
const employee2 = employee;
const employee3 = Map(employee);

employee2.name = 'Doe';
const employee4 = employee3.set('name', 'Sara');

console.log(employee);
console.log(employee2);
console.log(employee3);
console.log(employee3.get('name'));
console.log(employee4.get('name'));

console.log(employee === employee2);
console.log(employee === employee3);
