const defaultMessage = {
  BEST: [
    "Your performance on the assignment is truly outstanding! Your dedication shines through. Keep up the excellent work. Best regards from the Programming Hero Team.",
    "Incredible job on the assignment! Your skills are truly impressive. Strive for even greater heights. Best regards from the Programming Hero Team.",
    "You've excelled in completing the assignment! Your potential is boundless. Keep pushing yourself. Best regards from the Programming Hero Team.",
    "Remarkable work on the assignment! Your effort is commendable. Aim for continuous improvement. Best regards from the Programming Hero Team.",
  ],
  GOOD: [
    "Your performance on the assignment is good, and you've shown great potential. Keep refining your skills for even better results. Best regards from the Programming Hero Team.",
    "I want to acknowledge your effort on the project. You're on the right track, but there's room for enhancement. Best regards from the Programming Hero Team.",
    "Great job tackling the project! Your approach is promising. Strive for excellence in your future endeavors. Best regards from the Programming Hero Team.",
  ],
  AVERAGE: [
    "You've put in effort, but there's room for improvement. Keep honing your skills to achieve better outcomes. Best regards from the Programming Hero Team.",
    "Your project shows promise, but I encourage you to invest more effort. You're capable of great things. Best regards from the Programming Hero Team.",
    "While you've made progress, certain important aspects need more attention. Keep refining your work. Best regards from the Programming Hero Team.",
  ],
  BAD: [
    "Your current performance needs improvement. Stay updated with best practices and approach the modules meticulously to elevate your projects. Best regards from the Programming Hero Team.",
    "Your work needs refinement. Strive for better results by following best practices and paying attention to details. Best regards from the Programming Hero Team.",
    "It's evident that some important requirements have been missed. Focus on integrating the latest best practices into your projects. Best regards from the Programming Hero Team.",
  ],
};

function getFeedBack(submit, num) {
  switch (true) {
    case submit === 50 ? num > 49 : num >= 59:
      return defaultMessage["BEST"][
        Math.floor(Math.random() * defaultMessage["BEST"].length)
      ];

    case submit === 50 ? num >= 40 && num < 49 : num >= 50 && num < 59:
      return defaultMessage["GOOD"][
        Math.floor(Math.random() * defaultMessage["GOOD"].length)
      ];

    case submit === 50 ? num >= 30 && num < 40 : num >= 40 && num < 50:
      return defaultMessage["AVERAGE"][
        Math.floor(Math.random() * defaultMessage["AVERAGE"].length)
      ];

    default:
      return defaultMessage["BAD"][
        Math.floor(Math.random() * defaultMessage["BAD"].length)
      ];
  }
}

function generateFeedbacks() {
  let ourMarks = [
    { name: "cubeNumber", ...cubeFeedback },
    { name: "matchFinder", ...matchFeedback },
    { name: "sortMaker", ...sortFeedback },
    { name: "findAddress", ...findFeedback },
    { name: "canPay", ...canPayFeedback },
  ];
  let totalMarkers = ourMarks.reduce((prev, next) => prev + next.marks || 0, 0);

  // assignment submited at
  let submitedNum = document.getElementsByClassName("font-weight-bold pl-2 ")[0]
    .innerText;

  if (submitedNum == 60) {
    totalMarkers = 60 - (60 - totalMarkers);
  } else if (submitedNum == 50) {
    totalMarkers = Math.ceil(50 - ((60 - totalMarkers) * 50) / 60);
  } else {
    totalMarkers = Math.ceil(30 - (60 - totalMarkers) / 2);
  }

  let feedback = ``;
  feedback += `<strong>Assignment Feedback:</strong>
    `;

  for (finalFeedback of ourMarks) {
    feedback += `
  <strong style="text-align:left;">${
    finalFeedback.name
  }:</strong>&nbsp&nbsp<span>${
      finalFeedback?.message + " " + finalFeedback.bonusMessage
    }</span>
      `;
  }

  feedback += `
  
  <strong>Examiner Feedback:</strong> ${getFeedBack(submitedNum, totalMarkers)}
  
  <strong>Important Instructions:</strong>
    → Don't post any marks-related issues on Facebook.
    → Make sure to read all the feedback carefully.
    → If you think some mistake happen from the examiner's end, give a recheck request.
    → If your recheck reason was not valid, 2 marks will be deducted from your current marks.
    → Please check the documentation below for more information about how to recheck.
  <br/>
  <strong>Documentation:</strong>
  How to Recheck: https://bit.ly/how-to-recheck
  <br/>
  <strong>Let's Code_ Your Career</strong>`;

  // Quil Feedback Box
  const textArea = document.querySelector(".ql-editor p");
  textArea.innerHTML = feedback;

  // Actual Marks Box
  const markField = document.getElementById("Mark");

  const gotMark = document.createElement("p");
  gotMark.className = "m-2 w-50 markSuggestions";
  gotMark.id = "markSuggestions";
  gotMark.innerText = `${totalMarkers} ?`;

  markField.after(gotMark);
}
