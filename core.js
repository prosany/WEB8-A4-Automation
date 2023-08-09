let sampleNoBonus = {
  isBonus: false,
  marks: 0, //if no mark for commenting ==> marks: 0
  bonusMessage: "Your validation is not working so no mark for validation.", //no marks for validation
};
let cubeFeedback = { ...sampleNoBonus };
let matchFeedback = { ...sampleNoBonus };
let sortFeedback = { ...sampleNoBonus };
let findFeedback = { ...sampleNoBonus };
let canPayFeedback = { ...sampleNoBonus };

const startSpyings = async () => {
  try {
    let rawSubmission = document.getElementsByClassName("col-12 col-md-11");
    let studentSubmisson = rawSubmission[8].innerText;

    eval(studentSubmisson);

    // cubeFeedback testing starts here - 1
    try {
      // test cases
      let sampleInput = [5, 8, 4, ""];
      let expectedOutput = [125, 512, 64, "Random Text"];
      let [out1, out2, out3, out4] = sampleInput.map((singleOut, index) => {
        let evalOut = cubeNumber(singleOut);
        if (evalOut === expectedOutput[index]) {
          return true;
        } else if (
          index === 3 &&
          typeof evalOut === "string" &&
          evalOut.length > 4
        ) {
          cubeFeedback = {
            ...cubeFeedback,
            marks: (cubeFeedback.marks || 0) + 2,                 // +2
            isBonus: true,
            gotBonus: true,
            bonusMessage: "You got bonus marks for validation",                     // you got bonus for validation
          };
          return true;
        } else {
          return false;
        }
      });

      if (out1 && out2 && out3) {
        cubeFeedback = {
          ...cubeFeedback,
          marks: (cubeFeedback.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true,
          gotFunction: true,
          message: !out4
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! cubeNumber function working fine. Great job!",
        };
      } else {
        cubeFeedback = {
          ...cubeFeedback,
          isSuccess: null,
          marks: cubeFeedback.marks > 0 ? cubeFeedback.marks + 3 : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: cubeFeedback.isBonus
            ? cubeFeedback.bonusMessage
            : "No marks for validation.", //"No marks for validation"
        };
      }
    } catch (err) {
      cubeFeedback = {
        ...cubeFeedback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? `❌ Error occurred while running cubeNumber function. The error was: "${err.message}"`
            : err.message,
      };
    }
    // cubeFeedback testing ends here

    // matchFinder testing starts here - 2
    try {
      // test cases
      let sampleInput = [
        ["John Doe", "ohn"],
        ["JavaScript", "Code"],
        ["Peter Parker", "Pen"],
        ["Peter Parker", "pet"],
        [1, "Hello"],
      ];
      let expectedOutput = [true, false, false, false, "Random Text"];
      let [out1, out2, out3, out4, out5] = sampleInput.map(
        (singleOut, index) => {
          let evalOut = matchFinder(singleOut[0], singleOut[1]);
          if (evalOut === expectedOutput[index]) {
            return true;
          } else if (
            index === 4 &&
            typeof evalOut === "string" &&
            evalOut.length > 4
          ) {
            matchFeedback = {
              ...matchFeedback,
              marks: (matchFeedback.marks || 0) + 2,
              isBonus: true,
              gotBonus: true,
              bonusMessage: "You got bonus marks for validation & commenting",
            };
            return true;
          } else {
            return false;
          }
        }
      );

      if (out1 && out2 && out3) {
        matchFeedback = {
          ...matchFeedback,
          marks: (matchFeedback.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true,
          gotFunction: true,
          message: !out5
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! matchFinder function working fine. Great job!",
        };
      } else {
        matchFeedback = {
          ...matchFeedback,
          marks: matchFeedback.marks > 0 ? matchFeedback.marks + 3 : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: matchFeedback.isBonus
            ? matchFeedback.bonusMessage
            : "You got bonus marks for comments. No marks for validation.",
        };
      }
    } catch (err) {
      matchFeedback = {
        ...matchFeedback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? `❌ Error occurred while running matchFinder function. The error was: "${err.message}"`
            : err.message,
      };
    }
    // matchFinder testing ends here

    // sortMaker testing starts here - 3
    try {
      // test cases
      let sampleInput = [
        [2, 3],
        [2, 4],
        [4, 4],
        [4, 10],
        [4, -2],
      ];
      let expectedOutput = [[3, 2], [4, 2], "equal", [10, 4], "Random Text"];
      let [out1, out2, out3, out4, out5] = sampleInput.map(
        (singleOut, index) => {
          let evalOut = sortMaker(singleOut);

          if (index === 2 && evalOut?.includes("equal")) {
            return true;
          } else if (
            JSON.stringify(evalOut) === JSON.stringify(expectedOutput[index])
          ) {
            return true;
          } else if (
            index === 4 &&
            typeof evalOut === "string" &&
            evalOut.length > 4
          ) {
            sortFeedback = {
              ...sortFeedback,
              marks: (sortFeedback.marks || 0) + 2,
              isBonus: true,
              gotBonus: true,
              bonusMessage: "You got bonus marks for validation & commenting",
            };
            return true;
          } else {
            return false;
          }
        }
      );

      if (out1 && out2 && out4 && out3) {
        sortFeedback = {
          ...sortFeedback,
          marks: (sortFeedback.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true,
          gotFunction: true,
          message: !out5
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! sortMaker function working fine. Great job!",
        };
      } else {
        sortFeedback = {
          ...sortFeedback,
          marks: sortFeedback.marks > 0 ? sortFeedback.marks + 3 : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: sortFeedback.isBonus
            ? sortFeedback.bonusMessage
            : "You got bonus marks for comments. No marks for validation.",
        };
      }
    } catch (err) {
      sortFeedback = {
        ...sortFeedback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? `❌ Error occurred while running sortMaker function. The error was: "${err.message}"`
            : err.message,
      };
    }
    // sortMaker testing ends here

    // findingBadData testing starts here - 4
    try {
      // test cases
      let sampleInput = [
        { street: 12, house: "60B", society: "Mars Perfect" },
        { street: 15, society: "Earth Perfect" },
        { street: 40 },
      ];
      let expectedOutput = [
        "12,60B, Mars Perfect",
        "15,__, Earth Perfect",
        "40, __, __",
      ];
      let [out1, out2, out3] = sampleInput.map((singleOut, index) => {
        let evalOut = findAddress(singleOut);
        if (
          evalOut.replace(/\s/g, "") === expectedOutput[index].replace(/\s/g, "")
        ) {
          findFeedback = {
            ...findFeedback,
            marks:  2,
            isBonus: true,
            gotBonus: true,
            bonusMessage: "You got bonus marks for validation & commenting",
          };
          return true;
        } else {
          return false;
        }
      });
      if (out1 && out2) {
        findFeedback = {
          ...findFeedback,
          marks: (findFeedback.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true,
          gotFunction: true,
          message: !out3
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! findAddress function working fine. Great job!",
        };
      } else {
        findFeedback = {
          ...findFeedback,
          marks: findFeedback.marks > 0 ? findFeedback.marks + 3 : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: findFeedback.isBonus
            ? findFeedback.bonusMessage
            : "You got bonus marks for comments. No marks for validation.",
        };
      }
    } catch (err) {
      findFeedback = {
        ...findFeedback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? `❌ Error occurred while running findAddress function. The error was: "${err.message}"`
            : err.message,
      };
    }
    // findingBadData testing ends here

    // gemsToDiamond testing starts here - 5
    try {
      // test cases
      let sampleInput = [
        [[1, 2, 5], 10],
        [[1, 5, 5], 10],
        [[], 12],
      ];
      let expectedOutput = [false, true, "Random Text"];
      let [out1, out2, out3] = sampleInput.map((singleOut, index) => {
        let evalOut = canPay(singleOut[0], singleOut[1]);
        if (evalOut === expectedOutput[index]) {
          return true;
        } else if (
          index === 2 &&
          typeof evalOut === "string" &&
          evalOut.length > 4
        ) {
          canPayFeedback = {
            ...canPayFeedback,
            marks: (canPayFeedback.marks || 0) + 2,
            isBonus: true,
            gotBonus: true,
            bonusMessage: "You got bonus marks for validation & commenting",
          };
          return true;
        } else {
          return false;
        }
      });
      if (out1 && out2) {
        canPayFeedback = {
          ...canPayFeedback,
          marks: (canPayFeedback.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true,
          gotFunction: true,
          message: !out3
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! canPay function working fine. Great job!",
        };
      } else {
        canPayFeedback = {
          ...canPayFeedback,
          marks: canPayFeedback.marks > 0 ? canPayFeedback.marks + 3 : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: canPayFeedback.isBonus
            ? canPayFeedback.bonusMessage
            : "You got bonus marks for comments. No marks for validation.",
        };
      }
    } catch (err) {
      canPayFeedback = {
        ...canPayFeedback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? `❌ Error occurred while running canPay function. The error was: "${err.message}"`
            : err.message,
      };
    }
    // gemsToDiamond testing ends here
  } catch (err) {
    const feedbackSample = {
      marks: 0,
      isFunctionAvailable: null,
      isError: true,
      isSuccess: null,
      isBonus: null,
      bonusMessage: "No bonus marks for validation",
      message:
        err.name === "SyntaxError"
          ? "No functions found or You may have misspelled your function name."
          : err.message,
    };
    cubeFeedback = feedbackSample;
    matchFeedback = feedbackSample;
    sortFeedback = feedbackSample;
    findFeedback = feedbackSample;
    canPayFeedback = feedbackSample;
  }
};
