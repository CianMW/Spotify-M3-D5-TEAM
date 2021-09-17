function enterSpotify() {
  const input = document.querySelector("#button").value;
  const email = document.querySelector("#input").value;
  const pass = document.querySelector("#input1").value;
  if (!input || input1) {
    alert("Please fill in all the fields.");
  } else {
    const newTr = document.createElement("tr");
  }
}

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.flex - grow.text1.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.felx - row.text1.focus();
    return false;
  }
}
