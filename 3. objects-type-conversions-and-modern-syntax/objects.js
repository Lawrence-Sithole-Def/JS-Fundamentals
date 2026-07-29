const employee = {
  firstName: "David",
  lastName: "Tucker",
  department: "Engineering",
  title: "Principal Engineer",
  isActive: true,
  numberOfYearsEmployed: 6,
  startDate: new Date("2019-03-15")
};

console.log(employee["firstName"]);
console.log(employee["lastName"]);

const employeeBadge = {
  "badge color": "yellow"
};

console.log(employeeBadge["badge color"]);

const propertyName = "department";

console.log(employee[propertyName]);

employee.location = "Atlanta";

console.log(employee);

employee["manager"] = "Sarah Smith";

console.log(employee);

employee.title = "Senior Principal Engineer";

console.log(employee.title);

delete employee.location;

console.log(employee);

console.log(employee.middleName);

console.log(employee.departmnt);

console.log(Object.hasOwn(employee, "department"));
console.log(Object.hasOwn(employee, "middleName"));

const employeeWithContact = {
  firstName: "David",
  lastName: "Tucker",
  contact: {
    email: "david@example.com",
    phone: "555-0100"
  }
};

console.log(employeeWithContact.contact.email);

const employeeOne = {
  firstName: "David",
  lastName: "Tucker"
};

const employeeTwo = employeeOne;

employeeTwo.lastName = "Smith";

console.log(employeeOne.lastName);
console.log(employeeTwo.lastName);