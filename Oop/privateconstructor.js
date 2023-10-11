class Car {
  /* 
    ? | Untuk menyelesaikan masalah ini, 
    ? | JavaScript versi ES2022 secara resmi mengenalkan 
    ? | cara dalam menetapkan hak akses private pada properti 
    ? | dan method objek, yakni dengan menambahkan tanda # 
    ? | di awal penamaan properti atau method.
    */

  #chassisNumber = null; // enclosing class

  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = this.#generateChassisNumber();
  }

  get chassisNumber() {
    return this.#chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }

  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }

  #generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

let car1 = new Car('Brand', 'Color', 0)
car1.chassisNumber = "20" // !you are not allowed to change the chassis number
console.log(car1.chassisNumber);