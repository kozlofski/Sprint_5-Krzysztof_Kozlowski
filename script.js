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
  
  const checkName = (user) => {
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
    const nick = `${firstHalf}${secondHalf}`;
    return capitalizeFirstLetter(nick);
  };

  const properNames = inputData.filter(checkName);

  const nickNames = properNames.map(createNick);

  console.log(nickNames);

//   const addNickName = (user) => {

//   }

//   inputData.forEach(addNickName);

