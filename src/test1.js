const acorn = require("acorn");
const Parser = acorn.Parser;
const ast = Parser.parse(`
var a = 1;
function A() {
  a = { i: 0, c: 2 };
  return a;
}

var b = ({ c } = A().i = a.d = 2);
console.log(c)
`,{
    sourceType: "123",
    locations: true
}); 