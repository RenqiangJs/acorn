const acorn = require("acorn");
const Parser = acorn.Parser;
var literalExtend = function(Parser) {
  return class extends Parser {
    parseLiteral (...args) {
        const node = super.parseLiteral(...args);
        switch(typeof node.value) {
            case 'number':
                node.type = 'NumericLiteral';
                break;
            case 'string':
                node.type = 'StringLiteral';
                break;
        }
        return  node;
    }
  }
}
// console.log( Object.keys(Parser));
const newParser = Parser.extend(literalExtend);
console.log(newParser)
const ast = newParser.parse(`
    const a = 1;
`);
