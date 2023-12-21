import { produce } from 'immer';

const employee = { name: 'john' };
const employee2 = employee;
const employee3 = produce(employee, (emp) => {
  emp.name = 'Sara';
});

employee2.name = 'Doe';

console.log(employee);
console.log(employee2);
console.log(employee3);

console.log(employee === employee2);
console.log(employee === employee3);
