const author = document.querySelector(".author");
const quote = document.querySelector(".quote");
const new_quote = document.querySelector("#new-quote");
const tweet = document.querySelector("#tweet");
const apiUrl = "https://api.themotivate365.com/stoic-quote";

async function getQuote() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  quote.textContent = data.quote;
  author.textContent = data.author;
  tweet.addEventListener("click", () => shareTweet(data));
}
getQuote();
new_quote.addEventListener("click", () => {
  getQuote();
});

const shareTweet = (data) => {
  window.open(
    `https://twitter.com/intent/tweet?text=${
      data.quote + "  " + "-" + data.author
    }`
  );
};
