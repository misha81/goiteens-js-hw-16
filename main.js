import users from './users.js';
// ============================1============================
const getUserNames = users.map(user => user.name);
console.log(getUserNames);
// ============================2============================
const getUsersWithEyeColor = users.filter(user => user.eyeColor === 'brown');
console.log(getUsersWithEyeColor);
// ============================3============================
const getUsersWithGender = users
.filter(user => user.gender === 'male')
.map(user => user.name);
console.log(getUsersWithGender);
// ============================4============================
const getInactiveUsers = users
.filter(user => user.isActive === false)
.map(user => user.name);
console.log(getInactiveUsers);
// ============================5============================
const getUsersWithEmail = users.find(user => user.email === 'shereeanthony@kog.com');
console.log(getUsersWithEmail.name);
// ============================6============================
console.log('Від 20 до 30');
const findUserWithAge = users
.filter(user => user.age >= 20 && user.age <= 30)
.map(user => user.name);
console.log(findUserWithAge);