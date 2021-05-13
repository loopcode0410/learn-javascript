module.exports = function (babel) {
  var t = babel.types;
  var reactIdentifier = t.identifier("React"); //object
  var createElementIdentifier = t.identifier("createElement");
  var callee = t.memberExpression(reactIdentifier, createElementIdentifier)
  return {
    name: "custom-jsx-plugin",
    visitor: {
      JSXOpeningElement(path) {
        console.log(path.node);
        //         var tagName = node.name.name;
        //         var args = []; 
        //         args.push(t.stringLiteral(tagName)); 
        //         var attribs = t.nullLiteral(); 
        //         args.push(attribs); 
        //         console.log(args);
        //         var callExpression = t.callExpression(callee, args);
        //         callExpression.arguments = callExpression.arguments.concat(path.node.children);
        //         path.replaceWith(callExpression, node); 
        console.log("=============================");
      },
      JSXAttribute(path) {
        // console.log(path);
      }
    },
  };
};