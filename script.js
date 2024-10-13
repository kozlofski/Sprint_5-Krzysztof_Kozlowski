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
  return (
    typeof user.firstName === "string" &&
    typeof user.lastName === "string" &&
    user.firstName.length >= 3 &&
    user.lastName.length >= 3
  );
};

const capitalizeFirstLetter = (inputString) => {
  if (!inputString) {
    return "";
  }
  return `${inputString[0].toUpperCase()}${inputString.slice(1)}`;
};

const createNick = (user) => {
  const firstHalf = user.firstName
    .slice(-3)
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  const secondHalf = user.lastName
    .slice(0, 3)
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  const nickLowCase = `${firstHalf}${secondHalf}`;
  return capitalizeFirstLetter(nickLowCase);
};

const addNickName = (user) => {
  if (userNameIsProper(user)) {
    user.nickname = createNick(user);
  }
};

inputData.forEach(addNickName);

// TASK 02

const hasNickName = (user) => {
  return "nickname" in user;
};

const processKeys = (user, index) => {
  const divisor = index === 0 ? 1 : index;
  const userKeys = Object.keys(user);
  const totalLetters = userKeys.reduce((sum, keyName) => {
    return sum + keyName.length;
  }, 0);

  return Math.ceil(totalLetters / divisor);
};

const calculateAge = (user, index) => {
  const numberOfLettersInName = user.firstName.length + user.lastName.length;
  const age =
    numberOfLettersInName % 2 === 0
      ? numberOfLettersInName
      : processKeys(user, index);
  return age;
};

const addAge = (user, index) => {
  if (hasNickName(user)) {
    const age = calculateAge(user, index);
    user.age = age;
  }
};

inputData.forEach(addAge);

console.log(inputData);
