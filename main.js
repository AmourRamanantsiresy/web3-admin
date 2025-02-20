const formatNumber = number => {
  if (number < 10) return `00${number}`;
  if (number < 100) return `0${number}`;
  return `${number}`;
};

const findCorrector = () => {
  const random = Math.random();

  const first = 0;
  const last = 120;

  const luckyPerson = Math.floor(random * (last - first)) + first;

  console.log(`The luckiest person to correct the homework is STD23${formatNumber(luckyPerson)}`);
};


findCorrector()