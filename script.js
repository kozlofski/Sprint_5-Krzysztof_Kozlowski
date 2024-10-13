const inputData = [
    {
      firstName: false,
      lastName: 2,
    },
    {
      firstName: "Roman",
      lastName: "Kowalski",
    },
  
    {
      firstName: "Halina",
      lastName: "Malina",
    },
    {
      firstName: "B",
      lastName: "22",
    },
    {
      firstName: "Jan",
      lastName: "Nowak",
    },
    {
      firstName: "Kamil",
      lastName: null,
    },
  ];
  
// TASK 01

const userNameIsProper = (user) => {
return typeof user.firstName === 'string' &&
typeof user.lastName === 'string' &&
user.firstName.length >= 3 &&
user.lastName.length >= 3;
};

const capitalizeFirstLetter = inputString => {
if(!inputString) {
    return '';
}
return `${inputString[0].toUpperCase()}${inputString.slice(1)}`
};

const createNick = (user) => {
const firstHalf = user.firstName.slice(-3).toLowerCase().split('').reverse().join('');
const secondHalf = user.lastName.slice(0, 3).toLowerCase().split('').reverse().join('');
const nickLowCase = `${firstHalf}${secondHalf}`;
return capitalizeFirstLetter(nickLowCase);
};

const addNickName = (user) => {
    if(userNameIsProper(user)) {
        user.nickname = createNick(user);
    }
}
    
inputData.forEach(addNickName);
    
// console.log(inputData);

// TASK 02

const hasNickName = (user) => {
    return 'nickname' in user;
};

console.log(inputData.filter(hasNickName));