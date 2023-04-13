// Write your solution in this file!


const employee = {
    name: "Bill",
    streetAddress: "yep"
}


function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, ...{[key]: value}}
}