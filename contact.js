import {
  humbergerBackground,
  menu,
  wholePage,
  headerSection,
} from "./humburger.js";

// contact-form's Animation

const contactForm = document.querySelector(".contact-form");
const submit = document.querySelector(".submit");

function contactFormStart() {
  contactForm.classList.toggle("z-index-change");
}
function contactFormFin() {
  contactForm.classList.remove("z-index-change");
}

humbergerBackground.addEventListener("click", contactFormStart);
wholePage.addEventListener("click", contactFormFin);

//confirm
// submit.addEventListener("click", function () {
//   alert("送信しますか？");
// });

// Copied

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  const form = document.getElementById("my-form");
  //    const button = document.getElementById("my-form-button");
  const status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("a-status");
    status.classList.add("success");
    status.innerHTML = "送信されました";

    setTimeout(() => {
      status.classList.remove("a-status");
      status.classList.remove("success");
      status.innerHTML = "";
    }, 4000);
  }

  function error() {
    status.classList.add("a-status");
    status.classList.add("error");
    status.innerHTML = "正しく記入されていません";

    setTimeout(() => {
      status.classList.remove("a-status");
      status.classList.remove("error");
      status.innerHTML = "";
    }, 4000);
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
