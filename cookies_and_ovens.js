// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
class Bake {
  constructor(parameter) {
    this.typeCake = parameter["typeCake"]; // determine the type of cake
    this.bakeTime = parameter["bakeTime"] || 0; // baking time
    this.userTime = parameter["userTime"]
    this.bakingResult = "";
    //this.kue = []
  }

  baking() {
    if (this.typeCake === "coklat") {
      //this.kue.push(new KueCoklat(this.typeCake))
      this.bakeTime = 10;

    } else if (this.typeCake === "keju") {
      //this.kue.push(new KueKeju(this.typeCake, ["tepung", "gula", "keju"]))
      this.bakeTime = 20;

    } else {
      //this.kue.push(new KueKacang(this.typeCake))
      this.bakeTime = 30;
    }
    return this.bakeTime
  }

  bakingResult() {
    if (this.userTime < (this.bakeTime / 2)) {
      this.bakingResult = "Mentah";
    } else if (this.userTime < (this.bakeTime)) {
      this.bakingResult = "Hampir Matang";
    } else if (this.userTime === this.bakeTime) {
      this.bakingResult = "Matang";
    } else {
      this.bakingResult = "Gosong";
    }
    return this.bakingResult;
  }

}


class Kue {
  constructor(bahan) {
    this.bahan = bahan;
    // this.mixingTime = parameter["mixingTime"] || 20
  }

  mixing() {
    if (this.mixingTime < 20) {
      return "Mixing again";
    } else {
      return "Enough";
    }
  }


}

class KueCoklat extends Kue {
  constructor(nama, bahan) {
    super(bahan)
    this.nama = nama
  }
}


class KueKeju extends Kue {
  constructor(nama, bahan) {
    super(bahan)
    this.nama = nama
  }
}

class KueKacang extends Kue {
  constructor(nama, bahan) {
    super(bahan)
    this.nama = nama
  }
}

class Container {
  constructor(kue) {
    this.kue = []
  }

  inputKue(nama, bahan, userTime) {
    switch (nama) {
    case 'coklat':
      var hasilKue = new Bake({
        typeCake: nama,
        bahan: bahan,
        userTime: userTime
      });
      hasilKue.baking()
        //hasilKue.bakingResult();
      break;

    case 'keju':
      var hasilKue = new Bake({
        typeCake: nama,
        bahan: bahan,
        userTime: userTime
      });
      hasilKue.baking()
        //
      break;

    case 'kacang':
      var hasilKue = new Bake({
        typeCake: nama,
        bahan: bahan,
        userTime: userTime
      });
      hasilKue.baking()
      break;
    default:
      console.log("booooo")
    }
    this.kue.push(hasilKue)
    console.log(this.kue);
  }
}

var coklat = new Bake({
  typeCake: "coklat",
  bahan: ["tepung", "gula", "coklat"],
  //bakeTime: 20,
  userTime: 15
});

var kacang = new Bake({
  typeCake: "kacang",
  bahan: ["tepung", "gula", "kacang"],
  //bakeTime: 20,
  userTime: 5
});

var keju = new Bake({
  typeCake: "keju",
  bahan: ["tepung", "gula", "keju"],
  //bakeTime: 20,
  userTime: 20
});

// keju.baking();
// coklat.baking();
// kacang.baking();
// keju.bakingResult();
// coklat.bakingResult();
// kacang.bakingResult();

var test = new Container()
test.inputKue("coklat", "tepung", 10)
var test_2 = new Container()
test_2.inputKue("keju", "tepung", 10)
