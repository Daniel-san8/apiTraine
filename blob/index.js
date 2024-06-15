const blobImg = fetch("./cr7.jpg");

blobImg
  .then((cr7) => {
    return cr7.blob();
  })
  .then((r) => {
    const urlR = URL.createObjectURL(r);
    const img = document.createElement("img");
    img.setAttribute("src", urlR);
    document.body.appendChild(img);
  });

const api = fetch("https://viacep.com.br/ws/40350000/json/");

api
  .then((r) => {
    return r.text();
  })
  .then((r) => {
    console.log(r);
  });
