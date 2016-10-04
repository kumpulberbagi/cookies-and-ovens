// referensi kue coklat dan kue kacang
// membuat adonan kue dalam oven
// status kue : kapan mengangkat kue dari oven biar
// tidak hangus

// MEMBUAT CLASS KUE UNTUK MENAMPUNG SEMUA PROPERTI KUE
'use strict'
class Kue
{
  constructor(kue)
  {
    this._nama = kue['nama']
    this._size = kue['size']
    this._rasa = kue['rasa']
    this._lama_panggang = kue['lama_panggang']
  }
set nama(nama){this._nama = nama}
get nama(){return this._nama}
set size(size){this._size = size}
get size(){return this._size}
set rasa(rasa){this._rasa = rasa}
get rasa(){return this._rasa}
set lama_panggang(lama_panggang){this._lama_panggang = lama_panggang}
get lama_panggang(){return this._lama_panggang}
}

class KueKacang extends Kue
{
  constructor(kue)
  {
    super(kue)
  }
}

class KueCoklat extends Kue
{
  constructor(kue)
  {
    super(kue)
  }
}

//‘mentah’, ‘hampir masak’, ‘selesai’, ‘hangus’.
// BUAT PANGGANG KUE
class Oven
{
    constructor()
    {
      this.tampung_kue  = []
      this.tampung_kue_jadi = []
    }

    add_kue(kue)
    {
      this.tampung_kue.push(kue)
    }

    panggang()
    {
      var lama_memanggang = random_lama_panggang()
      for(var kue in this.tampung_kue){
      if(this.tampung_kue[kue].nama === 'Kue Kacang'){
        console.log('lagi memanggang kue kacang .........');
        if(this.tampung_kue[kue].lama_panggang === lama_memanggang)
        {
          this.tampung_kue_jadi.push(this.tampung_kue[kue].nama)
          console.log('waktu memanggang kue kacang : '+this.tampung_kue[kue].lama_panggang+" menit");
          console.log('lama memanggang : '+lama_memanggang+' menit'+'\nStatus : Kue selesai dipanggang\n');
        }else if(this.tampung_kue[kue].lama_panggang < lama_memanggang)
        {
          console.log('waktu memanggang kue kacang : '+this.tampung_kue[kue].lama_panggang+" menit");
          console.log('lama memanggang : '+lama_memanggang+' menit'+'\nStatus : Kue hangus\n');
        }else if(this.tampung_kue[kue].lama_panggang > lama_memanggang)
        {
          console.log('waktu memanggang kue kacang : '+this.tampung_kue[kue].lama_panggang+" menit");
          console.log('lama memanggang : '+lama_memanggang+' menit'+'\nStatus : Kue hampir masak\n');
        }else if(this.tampung_kue[kue].lama_panggang === 0) {
            console.log('waktu memanggang kue kacang : '+this.tampung_kue[kue].lama_panggang+" menit");
          console.log('lama memanggang : '+lama_memanggang+' menit'+'\nStatus : Kue masih mentah, perlu diolah lebih lanjut\n');
        }
      }else if(this.tampung_kue[kue].nama === 'Kue Coklat'){
        console.log('lagi memanggang kue coklat .........');
        if(this.tampung_kue[kue].lama_panggang === lama_memanggang)
        {
          this.tampung_kue_jadi.push(this.tampung_kue[kue].nama)
          console.log('waktu memanggang kue coklat : '+this.tampung_kue[kue].lama_panggang+" menit");
          console.log('lama memanggang : '+lama_memanggang+' menit'+'\nStatus : Kue selesai dipanggang\n');
        }else if(this.tampung_kue[kue].lama_panggang < lama_memanggang)
        {
          console.log('waktu memanggang kue coklat : '+this.tampung_kue[kue].lama_panggang+" menit");
          console.log('lama memanggang : '+lama_memanggang+' menit'+'\nStatus : Kue hangus\n');
        }else if(this.tampung_kue[kue].lama_panggang > lama_memanggang)
        {
          console.log('waktu memanggang kue coklat : '+this.tampung_kue[kue].lama_panggang+" menit");
          console.log('lama memanggang : '+lama_memanggang+' menit'+'\nStatus : Kue hampir masak\n');
        }else if(this.tampung_kue[kue].lama_panggang === 0) {
            console.log('waktu memanggang kue coklat : '+this.tampung_kue[kue].lama_panggang+" menit");
          console.log('lama memanggang : '+lama_memanggang+' menit'+'\nStatus : Kue masih mentah, perlu diolah lebih lanjut\n');
        }
      }
    }
    }

    display_kue()
    {
      return this.tampung_kue
    }

    list_kue_jadi()
    {
      if(this.tampung_kue_jadi.length !== 0){
        return this.tampung_kue_jadi
      }else{
        console.log('Tidak ada kue yang selesai dipanggang,!\nCoba lagi diwaktu lain');
      }
    }
}

function random_lama_panggang()
{
  return Math.floor(Math.random()*20)+5
}
var properti_kue_kacang = {
  nama:'Kue Kacang',
  size: 5,
  rasa:'manis kacang',
  lama_panggang:15 //minutes
}
var properti_kue_coklat = {
  nama:'Kue Coklat',
  size: 7,
  rasa:'manis coklat',
  lama_panggang:10 //minutes
}
var kue_kacang = new KueKacang(properti_kue_kacang)
var kue_coklat = new KueCoklat(properti_kue_coklat)
var oven = new Oven()
console.log('=========== BAKING STORE ==========')
console.log('Isi Oven :');
oven.add_kue(kue_kacang)
oven.add_kue(kue_coklat)
console.log('=====================================');
console.log(oven.display_kue())
console.log('=====================================');
oven.panggang()
oven.list_kue_jadi()
