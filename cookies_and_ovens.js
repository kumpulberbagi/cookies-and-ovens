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
function random(){
  return ((Math.random())+1).toFixed(2)
}

class Kue {
  constructor(nama,status) {
    this.status = this.status;
    this.nama = nama ;
    this.status = status;
  }
  displayName(){
    console.log("Kue " +this.nama);
  }
}

class kacang extends Kue {
  constructor(nama,waktu,status) {
    super(nama,waktu,status);
    this.waktu = 10;
  }
  Status(){
    super.displayName();
    if (this.status > this.waktu  ) {
      console.log(`Hangus, telat ${ this.status-this.waktu} menit`);
    }else if (this.status <= this.waktu && this.status > this.waktu*0.9) {
      console.log("Matang")
    }else {
      console.log(`Mentah, kurang ${this.waktu-this.status} menit`);
    }
  }
}

class keju extends Kue {
  constructor(nama,waktu,status) {
    super(nama,waktu,status);
    this.waktu = 20;
  }
  Status(){
    super.displayName();
    if (this.status > this.waktu  ) {
      console.log(`Hangus, telat ${ this.status-this.waktu} menit`);
    }else if (this.status <= this.waktu && this.status > this.waktu*0.9) {
      console.log("Matang")
    }else {
      console.log(`Mentah, kurang ${this.waktu-this.status} menit`);
    }
  }
}
var kuekacang = new kacang("kacang",2);
kuekacang.Status()

var kusekeju = new keju("keju mza",15)
kusekeju.Status()
