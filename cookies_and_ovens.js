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
//class cookies

class Kue {
  constructor(nama,waktu) {
    this.status = this.status;
    this.nama = nama ;
    this.waktu = waktu;
  }
  displayName(){
    console.log("Kue " +this.nama);
  }
  Status(){
    switch (this.nama) {
      case 'kacang':
        return  10
        break;
      case 'keju':
        return 12
        break;
      default:

    }
  }
  bake(){
    if (this.Status() < this.waktu  ) {
      console.log(`Hangus, telat ${ this.waktu- this.Status()} menit`);
    }else if (this.Status() === this.waktu) {
      console.log("Matang")
    }else {
      console.log(`Mentah, kurang ${this.Status()-this.waktu} menit`);
    }
  }
}

class jenis extends Kue {
  constructor(nama,waktu) {
    super(nama,waktu);
  }
  Check(){
    super.displayName();
    super.bake();
  }
}



var kuekacang = new jenis("kacang",10);
kuekacang.Check()
var kuekeju = new jenis("keju",12);
kuekeju.Check()

// var kusekeju = new keju("keju mza",15)
// kusekeju.Status()
