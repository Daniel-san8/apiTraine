const links = document.querySelectorAll("a");

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
  const pageResponse = await fetch(url);
  const pageResponseText = await pageResponse.text();
  replaceContent(pageResponseText);
}

function replaceContent(newtext) {
  const newHtml = document.createElement("div");

  const oldContent = document.querySelector(".content");
  oldContent.innerHTML = newtext;
}

window.addEventListener("popstate", () => {
  fetchPage(window.location.href);
});

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
