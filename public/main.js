document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const responseMsg = document.getElementById("responseMsg");
  const errorMsg = document.getElementById("errorMsg");

  // Reset pesan
  responseMsg.classList.add("hidden");
  errorMsg.classList.add("hidden");

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      responseMsg.classList.remove("hidden");
      form.reset();
    } else {
      errorMsg.classList.remove("hidden");
    }
  } catch (err) {
    errorMsg.classList.remove("hidden");
    console.error(err);
  }
});
