// Objets Demo
// Dara Bejide
// Oct 14, 2026.
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Variables
let myBook;
let spot;

//challenges: 
// 1) add and display 2 more books. 1 softcover, 1 hard cover.
// 2) Fill an array with 5 books

async function setup() {
  createCanvas(windowWidth, windowHeight);
  spot = width*0.2;
  //create a single book
  myBook = new Book("CS30 Text", "Mr. Scott", 1234567098765, "leatherbound", 500, spot);
  myBook2 = new Book("Alice in Wonderland", "Charles Darwin", 1987654321233, "softcover", 300,
    spot);
  myBook3 = new Book("Room", "Emma Donald", 2356891245780, "hardcover", 600, spot);
}

function draw() {
  background(220);
  myBook.display();
  myBook2.display();
  myBook3.display();
}


//classes are nicely organised into the bottom of our file, or perhaps their own file.

class Book{
  //1. constructor
  constructor(title, author, isbn, cover, pages, x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
  }
  //2. class functions
  //inside a class, we omit the "function" keyword
  display(){
    //render our bookobject on the canvas
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    textSize(20);

    //set fill colour based on cover type (H, S, L)
    switch(this.cover){
      case "softcover":
        fill(220, 220, 0);
        break;
      case "hardcover":
        fill(100, 255, 255);
        break;
      case "leatherbound":
        fill(101, 7, 7);
        break;
    }

    //finall draw book spine
    rect(this.x, height/2, this.pages/10, 150);
    fill(255);
    text(this.title[0], this.x, height/2+50);
    spot += this.pages/10;
  }
}