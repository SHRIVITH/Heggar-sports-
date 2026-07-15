const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

// IMPORTANT: Replace this with your WhatsApp number including country code.
// Example for India: 919876543210
const whatsappNumber = "916361154188";
const message = encodeURIComponent("Hi Heggar Sports! I want to order custom jerseys for my team.");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

document.getElementById("whatsappBtn").href = whatsappLink;
document.getElementById("floatingWhatsapp").href = whatsappLink;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
