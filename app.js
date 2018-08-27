const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];


let command = prompt('Please enter a command');

if (command.toUpperCase() === 'PRINT'){  
  for (i = 0; i < employeeList.length; i++){
    render (employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
  }
} else if (command.toUpperCase() === 'VERIFY'){
  
  let employee = prompt('please enter an employee name');
  let message = '';

  for (i = 0; i < employeeList.length; i++){
    if (employee === employeeList[i].name){
      message = 'true';
      break;
    } else {
      message = 'false';
      break;
    }
  } 
  render(message);
} else if (command.toUpperCase() === 'LOOKUP'){
    let employee = prompt('please enter an employee name');

    for (i = 0; i < employeeList.length; i++){
      if (employee === employeeList[i].name){
        render (employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
          break;
      }
    }
} else if (command.toUpperCase() === 'CONTAINS'){
    let userWord = prompt('please enter a keyword to search');

    for (i = 0; i < employeeList.length; i++){
      if (employeeList[i].name.includes(userWord)) {
        render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
     }
  }
} else if (command.toUpperCase() === 'UPDATE'){
    let name = prompt ('please enter a name');
    let field = prompt ('please enter a field Name, Office Number, Phone Number');
    let value = prompt ('please enter a new value');

    for (i = 0; i < employeeList.length; i++){
      if (employeeList[i].name === name){
        if (field.toLowerCase() === 'name'){
        employeeList[i].name = value;
        render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
      }
        else if (field.toLowerCase() === 'phone number'){
          if (field.toLowerCase() === 'phone number'){
          employeeList[i].phoneNum = value;
          render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
        }
     } else if (field.toLowerCase() === 'office number'){
          if (field.toLowerCase() === 'office number'){
          employeeList[i].officeNum = value;
          render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
        }
      }
    }
  }
} else if (command.toUpperCase() === 'ADD'){
    let name = prompt('please enter a name');
    let officeNum = prompt('please enter an office number');
    let phoneNum = prompt('please enter a phone number');

    let employee = {};

    employee.name = name;
    employee.officeNum = officeNum;
    employee.phoneNum = phoneNum;

    employeeList.push(employee);

    for (i = 0; i < employeeList.length; i++){
      render (employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
} else if (command.toUpperCase() === 'DELETE'){
    let name = prompt('please enter a name to remove');

    for (i = 0; i < employeeList.length; i++){
      if (employeeList[i].name === name){
        employeeList.splice(i, 1);
        
        for (i = 0; i < employeeList.length; i++){
          render (employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
        }
      }
    }
  }

