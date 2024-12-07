let animals = [
      "Ant",
      "Bat",
      "Bear",
      "Bee",
      "Bird",
      "Cat",
      "Chicken",
      "Cow",
      "Crab",
      "Deer",
      "Dog",
      "Dolphin",
      "Duck",
      "Eagle",
      "Elephant",
      "Fish",
      "Frog",
      "Fox",
      "Goat",
      "Goose",
      "Horse",
      "Kangaroo",
      "Lion",
      "Lizard",
      "Monkey",
      "Mouse",
      "Owl",
      "Panda",
      "Penguin",
      "Pig",
      "Rabbit",
      "Rat",
      "Seal",
      "Shark",
      "Sheep",
      "Snake",
      "Spider",
      "Tiger",
      "Turtle",
      "Wolf",
      "Zebra"
    ]
let colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "orange",
      "purple",
      "pink",
      "brown",
      "black",
      "white",
      "gray",
      "teal",
      "gold",
      "silver",
      "lime"
    ]
function run(){
    let randomcolornum = Math.floor(Math.random() * colors.length);
    let color = colors[randomcolornum];
  let randomanimalnum = Math.floor(Math.random() * animals.length);
  let animal = animals[randomanimalnum];
      let number = Math.floor(Math.random() * 99) + 1;
      let password = color + animal + number + "!";
    console.log(password)
    document.getElementById("output").innerHTML=password
}