document.getElementById("recommendation-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value || "Anonymous";
  const message = document.getElementById("message").value;

  if (message.trim()) {
    const container = document.querySelector(".recommendations-container");
    const blockquote = document.createElement("blockquote");
    blockquote.textContent = `"${message}" - ${name}`;
    container.appendChild(blockquote);

    alert("Thank you for your recommendation!");
    this.reset();
  } else {
    alert("Please enter a message!");
  }
});
