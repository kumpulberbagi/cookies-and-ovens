// Answer These Questions:
//
// - What are essential classes?
// Tukang_masak, Oven dan Kue
// - What attributes will each class have?
//T => idle/not, waiting/on progress; O => mixing, heating, isEmpty, Temperature, kebersihan; Kue => main inggridient, additional, recipe, procedure
// - What interface will each class provide?
// Pesanan -> Tukang_masak nganggur? -> memilih resep -> campur bahan -> masuk oven -> menunggu matang -> angkat saat matang
// - How will the classes interact with each other?
// Tukang_masak -> kue, Tukang_masak -> Oven
// - Which classes will inherit from others, if any?
//yes, kue --> many kue things
//
// Your code here

// class Kue {
//   constructor(resep) {
//     this.nama = resep['nama']
//     this.waktu_oven = resep['waktu_oven'] || 0
//     this.telur = resep['telur'] || 0
//     this.terigu = resep['terigu'] || 0
//     this.air = resep['air'] || 0
//     this.gula = resep['gula'] || 0
//   }
//   get resep_waktu(){
//     return this.waktu_oven
// }
// }
class Oven {
  constructor(waktu_masak, jenis_kue) {
    this.temperature = 29;
    this.inUse = false;
    this.isClean = true;
    this.timer = 0;
    // this.waktu_masuk = waktu_masuk || 0
    // this.waktu_ambil = waktu_ambil;
    this.waktu_masak = waktu_masak
    this.jenis_kue = jenis_kue
  }
  set_timer(menit){
    this.timer = menit
  }
  bake_roti(){
     if (this.waktu_masak === this.timer){
       return "Matang"
     } else if (this.waktu_masak > this.timer){
       return ("Gosong " + (this.waktu_masak-this.timer) + " menit terlalu lama")
      } else {
       return ("belum matang " + (this.waktu_masak.lama_oven) + " menit terlalu cepat")
     }
  }
  tes_resep(){
    switch (this.jenis_kue) {
      case "coklat":
          return this.timer = 30
          break;
      case "keju":
          return this.timer = 20
          break;
      case "kacang":
          return this.timer = 15
          break
      default:
          return this.timer = 10
  }
}
  // cek_oven(){
  //   if(this.inUse === false && this.isClean === true){
  //     return "oven siap di pakai.."
  //   } else {
  //     return "oven belum siap pakai.."
  //   }
  // }
  // masukkan_oven(){
  //   if (this.inUse === false){
  //     this.inUse = true;
  //     this.timer = 60;
  //     this.temperature = 300;
  //     return "menunggu matang"
  //   }
  // }
  // menunggu_matang(){
  //   console.log("kue akan dimasak " + this.timer + " menit")
  //   for (var i = 0; i > this.timer; i++){
  //     console.log(this.timer - i + "menit lagi")
  //     this.timer = this.timer - 1
  //   }
  //   return this.timer = 0
  // }
  // ambil_kue(resep){
  //   if (this.inUse === true && this.timer === 0){
  //     this.inUse = false
  //     etalase.push(new Kue())
  //     return "Kue Matang dan telah siap"
  //   } else {
  //     return "Kue belum matang"
  //   }
  // }
}
var resep_enak = {
  nama : "kue enak",
  waktu_oven : 60,
  telur : 3,
  terigu : 300,
  air : 80,
  gula : 50
}


var oven1 = new Oven(20, "keju");
// var kue = new Kue (resep_enak)
oven1.tes_resep()
console.log(oven1.bake_roti());
// console.log(kue.waktu_oven)
