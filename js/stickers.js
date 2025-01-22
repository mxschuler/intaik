const go_btn = document.getElementById("go-button");

let legendary = ["dino1", "dino2"]
let rare = ["fox1"]
let common = ["fox2"]


go_btn.addEventListener('click', open_pkg);


function open_pkg() {
    document.getElementById("sticker-pkg") .src="images/open-sticker.PNG";
    // let random = Math.random();
    // let sticker;
    // if (random <= 0.1){
    //     sticker = legendary.shift();
    // }
    //
    // else if (random <= 0.3){
    //     sticker = rare.shift();
    // }
    //
    // else{
    //     sticker = common.shift();
    // }
    //
    setTimeout(show_sticker, 800)

}

function show_sticker(sticker){
    document.getElementById("sticker-pkg") .src= "./stickers/dino3.PNG";
}