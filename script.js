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
  const outputUser = { ...user };

  if (userNameIsProper(user)) {
    outputUser.nickname = createNick(user);
  }
  return outputUser;
};

const allUsersSomeWithNicknames = inputData.map(addNickName);
// console.log(allUsersSomeWithNicknames);

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
  const age = calculateAge(user, index);
  user.age = age;
};

const userWithNicknamesAndAges = allUsersSomeWithNicknames.filter(hasNickName);

userWithNicknamesAndAges.forEach(addAge);

// console.log(userWithNicknamesAndAges);

// TASK 03

const countLetterFrequencies = (user) => {
  const letters = {};
  for (property in user) {
    if (property === "age") {
      continue;
    }
    for (letter of user[property].toLowerCase().split("")) {
      if (letter in letters) {
        letters[letter]++;
      } else {
        letters[letter] = 1;
      }
    }
  }
  return letters;
};

const findMostCommonLetter = (user) => {
  const letters = countLetterFrequencies(user);
  const mostCommonLetters = {};
  let mostCommonLetterFrequency = 0;

  for (letter in letters) {
    const letterFrequency = letters[letter];
    if (letterFrequency > mostCommonLetterFrequency) {
      if (Object.keys(mostCommonLetters).length !== 0) {
        delete mostCommonLetters[mostCommonLetterFrequency];
      }
      mostCommonLetterFrequency = letterFrequency;
      mostCommonLetters[letterFrequency] = [];
      mostCommonLetters[letterFrequency].push(letter);
    } else if (letters[letter] === mostCommonLetterFrequency) {
      mostCommonLetters[letterFrequency].push(letter);
    }
  }
  const mostCommonLetter =
    mostCommonLetters[mostCommonLetterFrequency].sort()[0];
  const outputLetterObj = {};
  outputLetterObj[mostCommonLetter] = mostCommonLetterFrequency;
  console.log(outputLetterObj);
  return outputLetterObj;
};

userWithNicknamesAndAges.forEach(findMostCommonLetter);
