let data = [
    {
        Image: "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=",
        Name: "Burger",
        price: "$2",
    },
    {
        Image: "https://www.recipetineats.com/wp-content/uploads/2022/09/Fries-with-rosemary-salt_1.jpg",
        Name: "Fries",
        price: "$1.5",
    },
    {
        Image: "https://d2td6mzj4f4e1e.cloudfront.net/wp-content/uploads/sites/9/2019/04/soft-drinks.jpg",
        Name: "Soft Drinks",
        price: "$1",
    },
    {
        Image: "https://t3.ftcdn.net/jpg/03/01/97/86/360_F_301978652_O0aPwap1JaEVaAhj3mIlbqNnJGmRyCzC.jpg",
        Name: "Coco Cake",
        price: "$3",
    },
];

let container = document.getElementById("cont");
let burgerBtn = document.getElementById("burger");
let sidesBtn = document.getElementById("side");
let drinkBtn = document.getElementById("drink");
let dessertBtn = document.getElementById("dessert");

let appendData = function (category) {
    container.innerHTML = ""; // Clear the container before appending new data
    data.filter(item => item.Name === category).forEach((el) => {
        
        let orderId =  Math.floor((Math.random() * 100000) + 1);

        let divBox = document.createElement("div");
        divBox.setAttribute("id", "showBox");

        let orderNo = document.createElement("h2");
        orderNo.innerText = `# Oreder-Id ${orderId}`;
    
        let img = document.createElement("img");
        img.src = el.Image;

        let name = document.createElement("h3");
        name.innerText = `Name - ${el.Name}`;

        let price = document.createElement("h4");
        price.innerText = `Price -${el.price}`;

        divBox.append(orderNo, img, name, price);
        container.append(divBox);
    });
};

// Add event listeners to the buttons
burgerBtn.addEventListener("click", function () {
    container.innerHTML = ""; // Clear the container before appending new data
    // console.log(appendData(data))
    appendData("Burger");
});

sidesBtn.addEventListener("click", function () {
    container.innerHTML = ""; // Clear the container before appending new data
    appendData("Fries");
});

drinkBtn.addEventListener("click", function () {
    container.innerHTML = ""; // Clear the container before appending new data
    appendData("Soft Drinks");
});

dessertBtn.addEventListener("click", function () {
    container.innerHTML = ""; // Clear the container before appending new data
    appendData("Coco Cake");
});