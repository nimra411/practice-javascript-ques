const reverseNo = (value) => {
  let input = value;
  if (!input) {
    return undefined;
  }
  if (!Array.isArray(value)) {
    if (Number.isInteger(value)) {
      input = String(value).split("");
    } else {
      input = value.split("");
    }
  }

  const result = [];

  for (let i = input.length - 1; 0 <= i; i--) {
    const element = input[i];
    result.push(element);
  }

  if (Array.isArray(value)) return result;
  else if(Number.isInteger(value)) return Number(result.join(""))

  return result.join("");
};
module.exports = reverseNo;
