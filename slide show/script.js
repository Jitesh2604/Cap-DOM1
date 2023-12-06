let images = [
"https://via.placeholder.com/150/0000FF/808080 ?Text=PAKAINFO.com",
"https://via.placeholder.com/150/FF0000/FFFFFF?Text=yttags.com",
"https://via.placeholder.com/150/FFFF00/000000?Text=google.com",
"https://via.placeholder.com/150/000000/FFFFFF/?text=y2meta.com",
"https://www.gstatic.com/webp/gallery3/1.sm.png",
"https://pixabay.com/images/download/people-2944065_640.jpg?attachment",
"https://via.placeholder.com/300/09f/fff.png",
"https://www.kasandbox.org/programming-images/avatars/spunky-sam.png",
"https://www.kasandbox.org/programming-images/avatars/spunky-sam-green.png",
"https://www.kasandbox.org/programming-images/avatars/purple-pi.png",
"https://www.kasandbox.org/programming-images/avatars/purple-pi-teal.png",
"https://www.kasandbox.org/programming-images/avatars/purple-pi-pink.png",
"https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png",
"https://www.kasandbox.org/programming-images/avatars/primosaur-tree.png",
"https://www.kasandbox.org/programming-images/avatars/primosaur-sapling.png",
"https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png",
"https://www.kasandbox.org/programming-images/avatars/old-spice-man.png"
]

let mainDiv = document.getElementById("cont");
let slideShow = document.getElementById("slideShow");
let perv = document.getElementById("prev");
let next = document.getElementById("next");
let stop = document.getElementById("stop")
let img = document.createElement("img");

let i = 0; 
let show = false; 

slideShow.addEventListener("click", function(){
    show = true;
    nextImage(); // Start the slideshow
});

perv.addEventListener("click", function(){
    show = false;
    i = (i - 1 + images.length) % images.length;
    displayImage();
});

next.addEventListener("click", function(){
    show = false;
    i = (i + 1) % images.length;
    displayImage();
});

stop.addEventListener("click", function(){
    show = false;
});

function nextImage() {
    if (show) {
        img.src = images[i];
        mainDiv.innerHTML = ""; // Clear previous image
        mainDiv.appendChild(img);
        i = (i + 1) % images.length;
        setTimeout(nextImage, 3000); // Change image every 3 seconds
    }
}

function displayImage() {
    img.src = images[i];
    mainDiv.innerHTML = ""; // Clear previous image
    mainDiv.appendChild(img);
}


