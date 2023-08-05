let sampleNoBonus = {
  isBonus: false,
  marks: 1,
  bonusMessage: "You got bonus marks for comments. No marks for validation.",
};
let cubeFeedback = { ...sampleNoBonus };
let matchFeedback = { ...sampleNoBonus };
let sortFeedback = { ...sampleNoBonus };
let feedBadData = { ...sampleNoBonus };
let feedGems = { ...sampleNoBonus };

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
            marks: (cubeFeedback.marks || 0) + 1,
            isBonus: true,
            gotBonus: true,
            bonusMessage: "You got bonus marks for validation & commenting",
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
            : "You got bonus marks for comments. No marks for validation.",
        };
      }

      console.log(out1, out2, out3, out4, cubeFeedback);
    } catch (err) {
      cubeFeedback = {
        ...cubeFeedback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? "No function found named with cubeFeedback"
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
              marks: (matchFeedback.marks || 0) + 1,
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

      console.log("Final result: ", matchFeedback, out1, out2, out3, out4);
    } catch (err) {
      matchFeedback = {
        ...matchFeedback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? "No function found named with evenOdd"
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
              marks: (sortFeedback.marks || 0) + 1,
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
            ? "No function found named with isLGSeven"
            : err.message,
      };
    }
    // sortMaker testing ends here

    // findingBadData testing starts here - 4
    try {
      // test cases
      let sampleInput = [
        [69, 21, -13, 54, -1, -59, -2],
        [2, 5, 13],
        [-4, -9, -5, -33, -55],
        "",
      ];
      let expectedOutput = [4, 0, 5, "Random Text"];
      let [out1, out2, out3, out4] = sampleInput.map((singleOut, index) => {
        let evalOut = findingBadData(singleOut);
        if (evalOut === expectedOutput[index]) {
          return true;
        } else if (
          index === 3 &&
          typeof evalOut === "string" &&
          evalOut.length > 4
        ) {
          feedBadData = {
            ...feedBadData,
            marks: (feedBadData.marks || 0) + 1,
            isBonus: true,
            gotBonus: true,
            bonusMessage: "You got bonus marks for validation & commenting",
          };
          return true;
        } else {
          return false;
        }
      });
      if (out1 && out2 && out3) {
        feedBadData = {
          ...feedBadData,
          marks: (feedBadData.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true,
          gotFunction: true,
          message: !out4
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! findingBadData function working fine. Great job!",
        };
      } else {
        feedBadData = {
          ...feedBadData,
          marks: feedBadData.marks > 0 ? feedBadData.marks + 3 : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: feedBadData.isBonus
            ? feedBadData.bonusMessage
            : "You got bonus marks for comments. No marks for validation.",
        };
      }
    } catch (err) {
      feedBadData = {
        ...feedBadData,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? "No function found named with isLGSeven"
            : err.message,
      };
    }
    // findingBadData testing ends here

    // gemsToDiamond testing starts here - 5
    try {
      // test cases
      let sampleInput = [
        [1, 1, 1],
        [20, 200, 50],
        [29, 400, 85],
        [-2, 0, ""],
      ];
      let expectedOutput = [96, 6970, 15064, "Random Text"];
      let [out1, out2, out3, out4] = sampleInput.map((singleOut, index) => {
        let evalOut = gemsToDiamond(singleOut[0], singleOut[1], singleOut[2]);
        if (evalOut === expectedOutput[index]) {
          return true;
        } else if (
          index === 3 &&
          typeof evalOut === "string" &&
          evalOut.length > 4
        ) {
          feedGems = {
            ...feedGems,
            marks: (feedGems.marks || 0) + 1,
            isBonus: true,
            gotBonus: true,
            bonusMessage: "You got bonus marks for validation & commenting",
          };
          return true;
        } else {
          return false;
        }
      });
      if (out1 && out2 && out3) {
        feedGems = {
          ...feedGems,
          marks: (feedGems.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true,
          gotFunction: true,
          message: !out4
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! gemsToDiamond function working fine. Great job!",
        };
      } else {
        feedGems = {
          ...feedGems,
          marks: feedGems.marks > 0 ? feedGems.marks + 3 : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: feedGems.isBonus
            ? feedGems.bonusMessage
            : "You got bonus marks for comments. No marks for validation.",
        };
      }
    } catch (err) {
      feedGems = {
        ...feedGems,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? "No function found named with gemsToDiamond!"
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
    feedBadData = feedbackSample;
    feedGems = feedbackSample;
  }
};
