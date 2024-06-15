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
