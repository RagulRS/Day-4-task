const caps = ['hi how are you', 'make the code correct', 'bye bye'];

(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const words = arr[i].split(' ');
    for (let j = 0; j < words.length; j++) {
      words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1).toLowerCase();
    }
   arr[i] = words.join(' ');
  }
})(caps);

console.log(caps)

