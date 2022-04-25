function calculate() {
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

function swapmode() {
  document.body.classList.toggle("white");
}
