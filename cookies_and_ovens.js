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

// class Cookies{
//   constructor(){
//     this._data_cookies = [];
//     this.oven = []
//   }
//
//   addCookies(nama, max){
//     this._data_cookies.push(nama, max)
//   }
//
//   getCookies(){
//     return this._data_cookies;
//   }
//
//   getCookiesToOven(){
//     this.oven = new Oven(this._data_cookies)
//     return this.oven.getKue()
//   }
//
//
//   checkStatusCookies(){
//     return this.oven.bake()
//     // return this.oven.getStatusCookiesFromOven()
//   }
// }
//
// class Oven{
//   constructor(data_cookies){
//     this.data_cookies_oven = data_cookies
//     this.status = "mentah"
//     // var objCookies = new Cookies()
//     // objCookies.addCookies("kue Coklat", 10)
//     // this._cookies = objCookies.getCookies()
//   }
//
//   getKue(){
//     return `Kue yang ada di oven : \n` + this.data_cookies_oven[0]
//   }
//
//   getStatusCookiesFromOven(){
//     return this.data_cookies_oven[1]
//   }
//
//   bake(){
//     let maximal = this.data_cookies_oven[1] + random()
//     for(var i = 1; i < maximal ; i++){
//
//       sleep(1000)
//       if(i < Math.floor(this.data_cookies_oven[1] / 2)){
//         console.log(". Menit Ke " + i + " " + this.status + "\n");
//       }else if(i >=
//
//
//          Math.floor(this.data_cookies_oven[1] / 2)){
//         this.status = "Hampir Masak"
//         console.log(". Menit Ke " + i + " " + this.status + "\n");
//       }
//
//     }
//
//     if(this.data_cookies_oven[1] + random() == this.data_cookies_oven[1]){
//       this.status = ("Selamat " + this.data_cookies_oven[0] + " Anda sudah terpangang dengan matang");
//     }else{
//       this.status = ("Yah...!" + this.data_cookies_oven[0] + " Anda Hangus!");
//     }
//
//     return this.status
//   }
//
// }

var database = [
                "kue coklat", 10,
                "kue keju", 5,
                "kue apel", 15
                ]
// var kue = new Cookies()
// kue.addCookies("kue coklat", 10)
// kue.addCookies("kue keju", 5
// kue.addCookies("kue apel", 15)

class Cookies{
  constructor(nama, setTime){
    this._nama = nama
    this._setTime = setTime
  }



}

class Oven extends Cookies{
  constructor(nama, setTime){
    super(nama, setTime)
    this._indexMaxTime = 0
    this._status = "mentah"
  }

  checkStatusCookies(){

  }

  searchDatabase(){
    //return array ke berapa dari db
    this._indexMaxTime =  database.indexOf(this._nama)+1
  }

  bake(){
    // console.log(this._indexMaxTime)

    for(var i = 1 ; i <= this._setTime; i++){

        sleep(1000)
        if(i < Math.floor(database[this._indexMaxTime] / 2)){
          this._status = "Mentah"
          console.log(". Menit Ke " + i + " " + this._status + "\n");
        }else if(i >= Math.floor(database[this._indexMaxTime] / 2) && i < database[this._indexMaxTime]){
          this._status = "Hampir Masak"
          console.log(". Menit Ke " + i + " " + this._status + "\n");
        }else if(i == database[this._indexMaxTime]){
          this._status = "Sudah Matang"
          console.log(". Menit Ke " + i + " " + this._status + "\n");
        }else{
          this._status = "Sudah Hangus"
          console.log(". Menit Ke " + i + " " + this._status + "\n");
        }
    }

    if(database[this._indexMaxTime] == this._setTime){
      this._status = ("Selamat " + this._nama + " Anda sudah terpangang dengan matang");
    }else if(database[this._indexMaxTime] > this._setTime){
      this._status = ("Yah...! " + this._nama + " Anda masih belum matang!");
    }else if(database[this._indexMaxTime] < this._setTime){
      this._status = ("Yah...! " + this._nama + " Anda sudah hangus!");
    }

    return this._status
  }

}

// function jeda
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

var tukangMasak = new Oven("kue keju", 7);
// var oven = new Oven();
console.log(tukangMasak._nama);
console.log(tukangMasak._setTime);
tukangMasak.searchDatabase()
console.log(tukangMasak.bake());

// console.log(oven.getKue());
// console.log(tukangMask._data_cookies[0]);
// console.log(tukangMask._data_cookies[1]);
// console.log(tukangMask._nama);
