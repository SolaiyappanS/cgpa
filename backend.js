function calculateCGPA() {
  var gpa = new Array(8);
  var credits = new Array(8);
  var trigger = false;
  var sumOfAllCredits = 0;
  var result = 0;

  for (var i = 0; i < 8; i++) {
    gpa[i] = Number(document.getElementById("gpa" + (i * 1 + 1)).value);
    credits[i] = Number(document.getElementById("cred" + (i * 1 + 1)).value);
    if (gpa[i] < 0 || gpa[i] > 10 || credits[i] < 0) trigger = true;
    result += gpa[i] * credits[i];
    sumOfAllCredits += credits[i];
  }

  if (sumOfAllCredits <= 0) trigger = true;
  else result = result / sumOfAllCredits;
  result = result.toFixed(3);

  if (trigger)
    document.getElementById("result").innerHTML =
      "Enter proper values and calculate";
  else document.getElementById("result").innerHTML = "Your CGPA is " + result;
}

function calculateGPA() {
  var grade = new Array(16);
  var credits = new Array(16);
  var trigger = false;
  var sumOfAllCredits = 0;
  var result = 0;

  for (var i = 0; i < 16; i++) {
    grade[i] = Number(document.getElementById("grade" + (i * 1 + 1)).value);
    credits[i] = Number(document.getElementById("subcred" + (i * 1 + 1)).value);
    if (grade[i] === 0) credits[i] = 0;
    if (credits[i] < 0) trigger = true;
    result += grade[i] * credits[i];
    sumOfAllCredits += credits[i];
  }

  if (sumOfAllCredits <= 0) trigger = true;
  else result = result / sumOfAllCredits;
  result = result.toFixed(3);

  if (trigger)
    document.getElementById("gparesult").innerHTML =
      "Enter proper values and calculate";
  else
    document.getElementById("gparesult").innerHTML =
      "Your GPA is " +
      result +
      " and total credits earned in the Semester is " +
      sumOfAllCredits;
}

function clearGPA() {
  for (var i = 1; i <= 16; i++) {
    document.getElementById("grade" + i).value = 0;
    document.getElementById("subcred" + i).value = "";
  }
}

var count = false;

function showDetails() {
  if (!count) {
    document.getElementById("details").style.display = "contents";
    document.getElementById("knowmore").innerHTML = "Hide details";
    count = true;
  } else {
    document.getElementById("details").style.display = "none";
    document.getElementById("knowmore").innerHTML = "Details";
    count = false;
  }
}

function showGPACalc() {
  document.getElementById("gpaCalc").style.display = "block";
  document.getElementById("cgpaCalc").style.display = "none";
}

function showCGPACalc() {
  document.getElementById("gpaCalc").style.display = "none";
  document.getElementById("cgpaCalc").style.display = "block";
}
