const employee = { name: 'john', address: { city: 'city' } };

const newEmployee = Object.assign({}, employee, {
  name: 'doe'
});
newEmployee.address.region = 'region';
const newEmployee2 = {};
Object.assign(newEmployee2, employee, {
  name: 'sara',
  address: { city: 'new employee 2 city' }
});

const newEmployee3 = {
  ...employee,
  name: 'name 1',
  address: { ...employee.address, region: 'region' }
};

console.log(employee);
console.log(newEmployee);
console.log(newEmployee2);
console.log(newEmployee3);
