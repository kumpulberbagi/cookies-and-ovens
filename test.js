// Definining Class
class Cake {
  constructor(flavour) {
    this._flavour = flavour;
  }
}

class Bake {
  constructor(flavour, user_time) {
    var kue = new Cake(flavour);
    this._flavour = kue._flavour
    this._bake_time = 0;
    this._user_time = user_time || 0
  }

  baking() {
    if (this._flavour === "coklat") {
      this._bake_time = 10;

    } else if (this._flavour === "keju") {
      this._bake_time = 20;

    } else {
      this._bake_time = 30;
    }
    return this._bake_time;
  }

  baking_result() {
    // this.baking();
    if (this._user_time < (this._bake_time / 2)) {
      return "Mentah";
    } else if (this._user_time < (this._bake_time)) {
      return "Hampir Matang";
    } else if (this._user_time === this._bake_time) {
      return "Matang";
    } else {
      return "Gosong";
    }
  }

  result() {
    this.baking()
    console.log(`The cake flavour is ${this._flavour} ,the time needed to bake is ${this._bake_time} and your baking time is ${this._user_time}. Your cake is ${this.baking_result()} `);
  }
}

// Defining Inheritance
class ChocolateCake extends Cake {
  constructor(flavour) {
    super(flavour)
  }
}

class CheeseCake extends Cake {
  constructor(flavour) {
    super(flavour)
  }
}

class PeanutCake extends Cake {
  constructor(flavour) {
    super(flavour)
  }
}
// Difining variable and assign it to the class

// check the result





var testing = new Bake("keju", 22);
// console.log(testing.baking_result());
testing.result();

// class Factory() {
//
// }
