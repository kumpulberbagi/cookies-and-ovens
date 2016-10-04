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
class Cookies {
  constructor(arg){
    this._name = arg['name']
    this._status = arg['status']
    this._quality = 0
    this._feature =""
  }
  set name(value){
    this._name = value
  }
  get name(){
    return this._name
  }
  set status(value){
    this._status = value
  }
  get status(){
    return this._status
  }
  set quality(value){
    this._quality = value
  }
  get quality(){
    return this._quality
  }
  set feature(value){
    this._feature = value
  }
  get feature(){
    return this._feature
  }

}

class ChocoCookies extends Cookies{
  constructor(arg){
    super(arg)
    this._feature = 'coklat'
  }
  // set name(value){
  //   super.name(value)
  // }
  // get name(){
  //   super.name()
  // }
  // set status(value){
  //   super.status(value)
  // }
  // get status(){
  //   super.status()
  // }
  // set quality(value){
  //   super.quality(value)
  // }
  // get quality(){
  //   super.quality()
  // }
  // set feature(value){
  //   super.feature(value)
  // }
  // get feature(){
  //   super.feature()
  // }
}

class CheeseCookies extends Cookies{
  constructor(arg){
    super(arg)
    this._feature = 'keju'
  }
  // set name(value){
  //   super.name(value)
  // }
  // get name(){
  //   super.name()
  // }
  // set status(value){
  //   super.status(value)
  // }
  // get status(){
  //   super.status()
  // }
  // set quality(value){
  //   super.quality(value)
  // }
  // get quality(){
  //   super.quality()
  // }
  // set feature(value){
  //   super.feature(value)
  // }
  // get feature(){
  //   super.feature()
  // }
}

class TokoKue {
  constructor(adonan){
    this._tepung = adonan ['tepung']
    this._telur = adonan ['telur']
    this._mentega = adonan ['mentega']
    this._waktu = adonan ['waktu']
    this._adonan =""
    this._rasa =""
    this._kue = []
    this._topping =adonan['topping']
    this._masak = []
  }
  cekIngredients(){
    if(this._topping=='coklat'){
      this.addKue(new ChocoCookies({name: 'chocolate cake', status :""}))
    }else if(this._topping=='keju'){
      this.addKue(new CheeseCookies({name: 'cheese cake', status :""}))
    }else{
      this.addKue(new Cookies({name: 'usual cake', status :""}))
    }
    for(var i=0; i<this._masak.length; i++){
      if(this._tepung >= 150 && this._tepung<=200){
        this._masak[i].quality += 1
      }
      if(this._telur >= 2 && this._telur <= 5){
        this._masak[i].quality += 1
      }
      if(this._mentega >= 100 && this._mentega <= 150 ){
        this._masak[i].quality += 1
      }
    }
  }

  makeDough(){
    for (var i=0; i<this._masak.length; i++){
      if(this._masak[i].quality < 2){
        this._adonan += "BAD"
      } else {
        this._adonan += "OK"
        }
      }
    }

    addKue(value){
      this._masak.push(value)
    }
  oven(){
    if(this._adonan == "OK"){
      this._rasa += `dan Enak !!!`
    } else {
      this._rasa += `dan tidak enak !!!`
    }
    for(var i=0; i<this._masak.length; i++){
      if(this._waktu <= 15){
        this._masak[i].status =`Kue masih mentah !!! @#&*@^$&^&$^#$&`
      }else if(this._waktu > 15 && this._waktu <= 45){
        this._masak[i].status =`Kue ${this._masak[i].feature} ini kurang matang ${this._rasa}`
      }else if(this._waktu >45 && this._waktu <=60){
        this._masak[i].status = `Kue ${this._masak[i].feature} ini matang ${this._rasa}`
      }else if(this._waktu >60){
        this._masak[i].status += `Kue Gosong !!!!!!!!!!!!!!`
      }
    }

    console.log(`Kue Berhasil dibuat`);
    console.log(this._masak[0].status);
  }


  driver(){
    this.cekIngredients()
    this.makeDough()
    this.oven()

  }

}



var mangku = new TokoKue({tepung: 200, telur: 3, mentega: 150, waktu: 50, topping:'keju'})
mangku.driver()
var ariz = new TokoKue({tepung: 100, telur: 1, mentega: 10, waktu: 30, topping:'coklat'})
ariz.driver()
