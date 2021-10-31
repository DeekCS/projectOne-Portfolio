const form = document.getElementById("contact-form");

let subject = document.getElementById("subject")

let fullName =  document.getElementById("fullName")

let email =  document.getElementById("email")

let phone =  document.getElementById("phone")

let message =  document.getElementById("message")

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let formMessage = {
    mailSubject:subject.value,
    name:fullName.value,
    email:email.value,
    phoneNum:phone.value,
    messageTxt:message.value,
  };
  let emailMessage = JSON.parse(localStorage.getItem("formMessage")) || [];
  emailMessage.push(formMessage);
  localStorage.setItem("formMessage", JSON.stringify(emailMessage));
  form.reset();
  Swal.fire({
    icon: "success",
    title: "Your message has been sent. Thank you.",
    showConfirmButton: false,
    timer: 1500,
  });
});

