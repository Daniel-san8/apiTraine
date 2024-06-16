window.history.pushState(null, null, "OPA");

window.addEventListener("popstate", () => {
  console.log("teste");
});
