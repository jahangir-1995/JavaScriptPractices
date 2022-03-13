const images = [
    "./images/image/img1 (1).png",
    "./images/image/img1 (2).png",
    "./images/image/img1 (3).png",
    "./images/image/img1 (4).png",
    "./images/image/img1 (5).png",
    "./images/image/img1 (6).png",
    "./images/image/img1 (7).png",
    "./images/image/img1 (8).png",
    "./images/image/img1 (9).png",
   
]
// image ready nai tai dekhabe  na

let imgIndex = 0;

const imageElement = document.getElementById("slider-img");


setInterval(() => {
    if(imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imageElement.setAttribute("src", imgUrl);
    imgIndex++;
}, 1000);