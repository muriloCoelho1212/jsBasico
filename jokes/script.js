fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("dog-img").src = data.message;
  });

fetch("https://official-joke-api.appspot.com/random_joke")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("joke-setup").textContent = data.setup;
    document.getElementById("joke-punchline").textContent = data.punchline;
  });

document.getElementById("reveal-btn").addEventListener("click", () => {
  const punchline = document.getElementById("joke-punchline");
  punchline.style.display =
    punchline.style.display === "none" ? "block" : "none";
});
