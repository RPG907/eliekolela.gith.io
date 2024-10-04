document.getElementById("contact-me").onsubmit = async function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  await fetch("/send-email", {
    method: "POST",
    body: formData,
  });
};
