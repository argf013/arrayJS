class Lingkaran {

  constructor(r){

    this.r = r;

  }

  getLuas() {

    return Math.PI * this.r * this.r;

  }

  getKeliling() {

    return 2 * Math.PI * this.r;

  }

}

const lingkaran1 = new Lingkaran(5);

console.log(Math.floor(lingkaran1.getLuas())); // Output: 78

console.log(Math.floor(lingkaran1.getKeliling())); // Output: 31
