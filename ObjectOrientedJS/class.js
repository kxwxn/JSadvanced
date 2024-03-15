/*---------------------------------------------------------------------------------------------------
 -----------------------------------------CLASS ex.1-------------------------------------------------
----------------------------------------------------------------------------------------------------*/

class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  getArea() {
    return (this.a * this.b) / 2;
  }
  getHypoteneus() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

/*---------------------------------------------------------------------------------------------------
 -----------------------------------------CLASS ex.2-------------------------------------------------
----------------------------------------------------------------------------------------------------*/

class Player {
  _score = 0; // _ means it's a private field in convention
  #numLives = 10; // # means this property only be reusable inside the class
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }

  // getter is not a METHOD but simply a making another property of the class
  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }

  get numLives() {
    return this.#numLives;
  }

  set numLives(newNumLives) {
    if (newNumLives < 0) {
      throw new Error("number of lives must be positive");
    }
    this.#numLives = newNumLives;
  }

  taunt() {
    console.log("BOOYAH!");
  }

  die() {
    this.#numLives -= 1;
  }

  scoring() {
    this._score += 10;
  }

  #secret() {
    console.log("SERCRET METHOD USED HASH SYMBOL");
  }
}

const n0wlk = new Player("kiwon", "kim");
const fullName = n0wlk.fullName;
console.log(fullName);
n0wlk.die();
console.log(n0wlk.numLives);
n0wlk.numLives = 120;

console.log(n0wlk.fullName);
n0wlk.fullName = "teresa ranta";
console.log(n0wlk);
