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

  const properNames = inputData.filter(userNameIsProper); //delete this later

  const nickNames = properNames.map(createNick); // delete this later
  
  const addNickName = (user) => {
      if(userNameIsProper(user)) {
          user.nickName = createNick(user);
        }
    }
    
inputData.forEach(addNickName);
    
console.log(inputData);
