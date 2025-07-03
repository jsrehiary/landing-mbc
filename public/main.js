document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    // Simulasi dummy pengiriman
    const res = await fetch("api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      document.getElementById("responseMsg").classList.remove("hidden");
      form.reset();
    }
  } catch (err) {
    alert("Gagal mengirim pesan.");
    console.error(err);
  }
});
