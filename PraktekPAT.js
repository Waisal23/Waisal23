// Tulis kode dibawah ini
//Soal no.1
class Hewan {
  constructor(nama, usia, ovipar) {
    this.nama = nama;
    this.usia = usia;
    this.ovipar = ovipar;
  }
}

//Soal No.2
class Phionex extends Hewan {
    constructor(nama, usia) {
        super(nama, usia, true); 
    }

    sleep() {
        return '${this.nama} sedang tidur';
    }
}

//Soal No.3
class Kucing extends Hewan {
    constructor(nama, usia) {
        super(nama, usia, false); 
    }

    eat() {
        return '${this.nama} sedang makan';
    }
}

//Soal No.4
const myPhionex = new Phionex("ikan", 2);

//Soal No.5
const myKucing = new Kucing("whiskas", 4);

//Contoh Penggunaan
console.log(myPhionex.sleep());
console.log(myKucing.eat());
console.log(myPhionex);
console.log(myKucing);
