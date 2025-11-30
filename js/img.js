for (let i = 1; i <= 6; i++) {
  const img = new Image();
  img.src = `../img/${i}.png`;

  img.onload = () => document.querySelector(".gallery").appendChild(img);
}
