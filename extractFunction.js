// function revealFunction(code, functionName) {
//   switch (functionName) {
//     case "MindGame":
//       return code.match(/function\s+mindGame\s*\(([^)]*)\)\s*\{([^}]*)\}/);
//     case "EvenOdd":
//       return code.match(/function\s+evenOdd\s*\(([^)]*)\)\s*\{([^}]*)\}/);
//     case "IsLGSeven":
//       return code.match(/function\s+isLGSeven\s*\(([^)]*)\)\s*\{([^}]*)\}/);
//     case "FindingBadData":
//       return code.match(
//         /function\s+findingBadData\s*\(([^)]*)\)\s*\{([^}]*)\}/
//       );
//     case "GemsToDiamond":
//       return code.match(/function\s+gemsToDiamond\s*\(([^)]*)\)\s*\{([^}]*)\}/);
//     default:
//       break;
//   }
// }

// function retriveFunction(code, fnName, prevFn) {
//   const positions = ["mindGame", "evenOdd"]
//   let start = code.indexOf(fnName);
//   let end = code.indexOf(prevFn);
//   let fnCode = code.slice(start, end).replace(/function\s/g, "");
//   let pattern = /\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm;
//   let replaced =
//     "function " + fnCode.replace(pattern, "").replace(/\n{2,}/g, "\n");

//   return replaced;
// }

// function retriveFunction(code, fnName) {
//   const positions = [
//     "MindGame",
//     "EvenOdd",
//     "IsLGSeven",
//     "FindingBadData",
//     "GemsToDiamond",
//   ];
//   let i = 4;
//   const input = [
//     "function mindGame(",
//     "function evenOdd(",
//     "function isLGSeven(",
//     "function findingBadData(",
//     "function gemsToDiamond(",
//   ];
//   const j = [];
//   while (i >= 0) {
//     let startIndex = code.indexOf(input[i]);
//     let endIndex = code.lastIndexOf("}") + 1;
//     let func2 = code.substring(startIndex, endIndex);
//     // console.log(func2)
//     j.push(func2);
//     const x = code.replace(func2, "");
//     code = x;
//     i--;
//   }
//   let index = positions.indexOf(fnName);
//   return j[index];
// }
function retriveFunction(code, fnName) {
  const positions = [
    "MindGame",
    "EvenOdd",
    "IsLGSeven",
    "FindingBadData",
    "GemsToDiamond",
  ];

  let i = 4;
  const input = [
    "mindGame",
    "evenOdd",
    "isLGSeven",
    "findingBadData",
    "gemsToDiamond",
  ];
  const j = [];
  while (i >= 0) {
    let startIndex = code.indexOf(input[i]);
    let endIndex = code.lastIndexOf("}") + 1;
    let func2 = code.substring(startIndex, endIndex);
    // console.log(func2)
    // j.push("function " + func2);
    j[i] = "function " + func2;
    const x = code.replace(func2, "");
    code = x;
    i--;
  }

  let index = positions.indexOf(fnName);
  return j[index];
}
