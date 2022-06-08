// Write your solution in this file!
// const employee = {
//     name: 'sid',
//     streetAddress: 'kilimani'
// };

// function updateEmployeeWithkeyAndValue( employee, key, value){
    
//     const newEmployee = { ...employee };

//     newEmployee[key] = value;

//     return newEmployee;
// }


// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
     
//     employee[key] = value;
//     return employee; 
// }

// function deleteFromEmployeeByKey (employee, key) {
//     const newEmployee = {...employee};
//     delete newEmployee[key];
//     return newEmployee;
// }

// function destructivelyDeleteFromEmployeeByKey (employee, key) {
//     delete employee[key];
//     return employee;
// }

const employee = {};
employee.name = 'Sid Ali';
employee.streetAddress  = 'kilimani';

function updateEmployeeWithKeyAndValue(employee,key,value){
     
//     const newEmployee = {...employee}
//     newEmployee[key]= value;
//     return newEmployee;
//     the below code is the refractored above code
       return{
           ...employee,
           [key]:value
       };
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    
        employee[key] = value;
        return employee;
}

function deleteFromEmployeeByKey(employee,key){
//     return{
          const newEmployee = {...employee} 
          delete newEmployee[key]
          return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee,key){
        delete employee[key];
        return employee;
}