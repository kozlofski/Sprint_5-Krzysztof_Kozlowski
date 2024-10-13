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

  const properNames = inputData.filter(checkName);

  console.log(properNames);