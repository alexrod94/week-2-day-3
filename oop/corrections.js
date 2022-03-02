class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  // method for permiter
  calculatePerimeter() {
    let perimeter = (this.width + this.height) * 2;
    return perimeter;
  }
  // method for calculating area of
  calculateArea() {
    return this.width * this.height;
  }
}
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side;
  }
  calculateSide() {
    let side = this.side * this.side;
    return side;
  }
}
const r1 = new Rectangle(6, 7);
console.log("Perimeter of r1 =", r1.calculatePerimeter());
console.log("Area of r1 =", r1.calculateArea());
const s1 = new Square(5);
console.log("Perimeter of s1 =", s1.calculatePerimeter()); // 20
console.log("Area of s1 =", s1.calculateArea()); // 25
const s2 = new Square(10);
console.log("Perimeter of s2 =", s2.calculatePerimeter()); // 40
console.log("Area of s2 =", s2.calculateArea()); // 100
