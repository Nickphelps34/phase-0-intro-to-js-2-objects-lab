// Write your solution in this file
let employee = {
    name:"Sam",
    streetAddress:"abcd"
}; 
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee}
    newObject[key] = value
    //add or change a key value for objects
    return newObject;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee;
}
function deleteFromEmployeeByKey(employee, key, value) {
    const newObject = {...employee}    
    newObject[key] = value
    return newObject
};
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value
    return employee;
}