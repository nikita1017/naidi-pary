let game = document.getElementById("game");
let imgs = "";
let heals = document.getElementById("heals");
let serdze = 0;
let images = [];
for (let image = 0; image <= 11; image++) {
  images.push("img/0 " + "(" + image + ")" + ".jpg");
  images.push("img/0 " + "(" + image + ")" + ".jpg");
}
console.log(images);
for (let i = 0; i <= 23; i++) {
  // первый способ вывода нескольких фотографий
//   imgs = imgs + '<img src="img/0 (' + i + ').jpg" alt="">';
  // второй способ вывода нескольких фотографий
  let img = document.createElement("img");
  img.src = "img/vopros.jpg";
  game.appendChild(img);
  img.onclick=function(){
    console.log("+1");
    serdze++;
    heals.innerHTML=("Попытки: " + serdze);
    let image = 0;
    img.src =images[i];
  }
}