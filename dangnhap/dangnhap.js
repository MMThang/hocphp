const errorMsg = document.getElementsByClassName("error-msg");
const submitBtn = document.getElementsByClassName("submit")[0];
const sexErrMsg = document.getElementsByClassName("sex-error-msg")[0];
const hobbyErrMsg = document.getElementsByClassName("hobby-error-msg")[0];
const nationalityErrMsg = document.getElementsByClassName(
  "nationality-error-msg"
)[0];
const textareaErrMsg = document.getElementsByClassName("textarea-error-msg")[0];
const idNationality = document.getElementById("nationality");
const idNote = document.getElementById("note");

const keyframe = [{ transform: "scale(0)" }, { transform: "scale(1)" }];

const errorColor = "#ffff90";
const normalColor = "#fff";

const timer = {
  duration: 100,
  iterations: 1,
};

function radio() {
  if ($("#male").is(":checked") || $("#female").is(":checked")) {
    return true;
  } else {
    return false;
  }
}

function checked() {
  if ($("input[type=checkbox]").is(":checked")) {
    return true;
  } else {
    return false;
  }
}

function options(elem) {
  var selectedValue = elem.options[elem.selectedIndex].value;
  if (selectedValue == "") {
    return true;
  } else {
    return false;
  }
}

function textarea(elem) {
  if (elem.value.length <= 200) {
    return true;
  } else {
    return false;
  }
}

function onmouseclickout(elem, formIndex) {
  $(document).click(function (e) {
    if (
      !$(e.target).closest(elem).length > 0 &&
      document.forms[0][formIndex].value == ""
    ) {
      document.forms[0][formIndex].style.backgroundColor = errorColor;
      errorMsg[formIndex].animate(keyframe, timer);
      errorMsg[formIndex].style.display = "block";
    } else {
      document.forms[0][formIndex].style.backgroundColor = normalColor;
      errorMsg[formIndex].style.display = "none";
    }
  });
}

function radioVerify() {
  if ($("#male").is(":checked") && !$("#female").is(":checked")) {
    $("#sex").css("background-color", normalColor);
    $("#male").attr("checked", "true");
    $("#female").removeAttr("checked", "true");
    sexErrMsg.style.display = "none";
  } else {
    $("#sex").css("background-color", normalColor);
    $("#female").attr("checked", "true");
    $("#male").removeAttr("checked", "true");
    sexErrMsg.style.display = "none";
  }
}

function checkboxesVerify(elem) {
  if (elem.hasAttribute("checked") == false) {
    elem.setAttribute("checked", "true");
  } else {
    elem.removeAttribute("checked");
  }

  if (checked()) {
    $("#hobby").css("background-color", normalColor);
    hobbyErrMsg.style.display = "none";
  } else {
    $("#hobby").css("background-color", errorColor);
    hobbyErrMsg.animate(keyframe, timer);
    hobbyErrMsg.style.display = "block";
  }
}

function optionsVerify(elem) {
  if (options(elem)) {
    $("#nationality").css("background-color", errorColor);
    nationalityErrMsg.animate(keyframe, timer);
    nationalityErrMsg.style.display = "block";
  } else {
    $("#nationality").css("background-color", normalColor);
    nationalityErrMsg.style.display = "none";
  }
}

function imposeMaxLength(elem) {
  if (!textarea(elem)) {
    $("#note").css("background-color", errorColor);
    textareaErrMsg.style.display = "block";
  } else {
    $("#note").css("background-color", normalColor);
    textareaErrMsg.style.display = "none";
  }
}

submitBtn.addEventListener("click", function (e) {
  for (let i = 0; i <= 2; i++) {
    if (document.forms[0][i].value == "") {
      e.preventDefault();
      document.forms[0][i].style.backgroundColor = errorColor;
      errorMsg[i].animate(keyframe, timer);
      errorMsg[i].style.display = "block";
    }
  }

  if (!radio()) {
    e.preventDefault();
    $("#sex").css("background-color", errorColor);
    sexErrMsg.animate(keyframe, timer);
    sexErrMsg.style.display = "block";
  }

  if (!checked()) {
    e.preventDefault();
    $("#hobby").css("background-color", errorColor);
    hobbyErrMsg.animate(keyframe, timer);
    hobbyErrMsg.style.display = "block";
  }

  if (options(idNationality)) {
    $("#nationality").css("background-color", errorColor);
    nationalityErrMsg.animate(keyframe, timer);
    nationalityErrMsg.style.display = "block";
  }

  if (!textarea(idNote)) {
    e.preventDefault();
    $("#note").css("background-color", errorColor);
    textareaErrMsg.style.display = "block";
  }
});
