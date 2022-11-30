let game = document.getElementById("game");
let imgs = "";
let heals = document.getElementById("heals");
let serdze = 0;
let images = [];
let opened = [];
let shetchik = 0;
// opened.push("6");
// opened[onclick] = 6;
// console.log(opened);
for (let image = 0; image <= 11; image++) {
  images.push("img/0 " + "(" + image + ")" + ".jpg");
  images.push("img/0 " + "(" + image + ")" + ".jpg")
}
for (let i = 0; i <= 23; i++) {
  // первый способ вывода нескольких фотографий
  // imgs = imgs + '<img src="img/0 (' + i + ').jpg" alt="">';
  // второй способ вывода нескольких фотографий
  let img = document.createElement("img");
  img.src = "img/vopros.jpg";
  game.appendChild(img);
  img.onclick=function(){
    img.style.pointerEvents="none";
    opened.push(img);
    img.src =images[i];
    if(opened.length == 2){
      serdze++;
      console.log("Вы открыли 2 карточки", opened[0].src, opened[1].src);
      if(opened[0].src == opened[1].src){
        console.log("Поздравляю! слияние личности", shetchik);
        opened = [];
        shetchik++;
        if(shetchik == 12){
          console.log("Победа, вы прошли игру");
        }
      }
      else{
        let imgs = document.getElementsByTagName("img");
        for(let imgControl = 0; imgControl <=23; imgControl++){
          console.log(imgs[imgControl]);
          imgs[imgControl].style.pointerEvents="none";
        }        
          setTimeout(() => {
          opened[0].src = "img/vopros.jpg";
          opened[1].src = "img/vopros.jpg";
          opened[0].style.pointerEvents = "auto";
          opened[1].style.pointerEvents = "auto";
          for(let i=0; i>=24; i++){imgs[0].style.pointerEvents = "auto";}
          opened = [];
        }, 1000);
      }
    }
    console.log(opened);
    heals.innerHTML=("Попытки: " + serdze);
    let image = 0;

    // let imgs = document.getElementsByTagName("img");
    // for(let image = 0; image <= 23; image++){
    //   imgs[image].src = "img/0 ("+ i +").jpg";
    // }
  }

  // img.onclick=function(){
  // images.src = "img/" + imgs;
  // }
}
for(let g=23; g>=0; g = g-1){
  let random = Math.floor(Math.random() * (g+1));
  let vremennya = images[g];
  images[g]=images[random];
  images[random]=vremennya;
}