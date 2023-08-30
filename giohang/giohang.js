const inputText = $(".input-text");
const inputCheckbox = $(".input-checkbox");
const valueHolder = document.getElementsByClassName("value-holder");
const totalID = document.getElementById("total");
const totalClass = document.getElementsByClassName("total");

function checked() {
  if ($("input[type=checkbox]").is(":checked")) {
    return true;
  } else {
    return false;
  }
}

function resetOption() {
  for (let i = 0; i < valueHolder.length; i++) {
    valueHolder[i].parentNode.style.display = "";
  }
}

function calculateTotal() {
  let newPrice = 0;
  for (let i = 0; i < totalClass.length; i++) {
    newPrice += parseInt(totalClass[i].innerHTML);
    console.log(totalClass[i]);
  }
  totalID.innerHTML = newPrice;
}

function sortProduct(elem) {
  resetOption();
  var selectedValue = elem.options[elem.selectedIndex].value;
  if (selectedValue == "sm100") {
    for (let i = 0; i < valueHolder.length; i++) {
      if (valueHolder[i].innerHTML > 100) {
        valueHolder[i].parentNode.style.display = "none";
      }
    }
  } else if (selectedValue == "between100500") {
    for (let i = 0; i < valueHolder.length; i++) {
      if (valueHolder[i].innerHTML < 100 || valueHolder[i].innerHTML > 500) {
        valueHolder[i].parentNode.style.display = "none";
      }
    }
  } else if (selectedValue == "lg500") {
    for (let i = 0; i < valueHolder.length; i++) {
      if (valueHolder[i].innerHTML < 500) {
        valueHolder[i].parentNode.style.display = "none";
      }
    }
  }
}

function checkedVerify(elem) {
  if (elem.hasAttribute("checked") == false) {
    elem.setAttribute("checked", "true");
  } else {
    elem.removeAttribute("checked");
  }

  for (let i = 0; i < inputCheckbox.length; i++) {
    if (inputCheckbox[i].hasAttribute("checked")) {
      inputText[i].disabled = false;
    } else {
      inputText[i].disabled = true;
      inputText[i].value = 0;
    }
    calculateTotal();
    elem.parentNode.parentNode.childNodes[9].childNodes[0].innerHTML = 0;
  }
}

$(".special-checkbox").change(function () {
  var isCheckedAll = $(this).prop("checked");
  inputCheckbox.prop("checked", isCheckedAll);
  inputText.prop("disabled", !isCheckedAll);

  if (isCheckedAll) {
    for (let i = 0; i < inputText.length; i++) {
      inputText[i].disabled = false;
    }
  } else {
    for (let i = 0; i < inputText.length; i++) {
      inputText[i].disabled = true;
      inputText[i].value = 0;
      inputText[
        i
      ].parentNode.parentNode.childNodes[9].childNodes[0].innerHTML = 0;
    }
    calculateTotal();
  }
});

function onchangeCheckbox() {
  var isCheckedAll =
    inputCheckbox.length === $(".input-checkbox:checked").length;
  $(".special-checkbox").prop("checked", isCheckedAll);
}

function onchangeUpdate(elem) {
  if (parseInt(elem.value) >= 0) {
    const price =
      parseInt(elem.parentNode.parentNode.childNodes[5].innerHTML) *
      parseInt(elem.value);
    elem.parentNode.parentNode.childNodes[9].childNodes[0].innerHTML = price;
  }
  calculateTotal();
}
