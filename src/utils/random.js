export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getHypotenuse = (a, b) => {
  return Math.floor(Math.sqrt(a * a + b * b));
};
