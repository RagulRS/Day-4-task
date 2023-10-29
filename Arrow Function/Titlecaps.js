const stringArray = ["hello world", "nice to meet the person", "my name is ragul"];

const titleCaseArray = stringArray.map(str => {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
});

console.log("Title-cased array:", titleCaseArray);
