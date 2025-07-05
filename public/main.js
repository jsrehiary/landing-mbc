document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;
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
      document.getElementById("responseMsg").classList.remove("hidden");
      form.reset();
    } else {
      alert("Gagal mengirim pesan.");
    }
  } catch (err) {
    alert("Terjadi kesalahan.");
    console.error(err);
  }
});
