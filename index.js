const strinLength = (string) => {
    if(string.length === 1 || string.length >= 10) {
        return null;
      }
      return string.length;
}

const ReverseStr = (str) => {
    let a = str.split('').reverse().join('')
    return a;
}

const add = (a,b) => {
    return a + b;
}

const substarct = (a,b) => {
    return a - b;
}

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

module.exports = {
    strinLength,
    ReverseStr,
    add,
    substarct,
    capitalize
};