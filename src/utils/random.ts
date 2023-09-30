const getRandomIntInclusive = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};

const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export default {
  getRandomIntInclusive,
  getRandomInt,
  getRandomArbitrary,
};
