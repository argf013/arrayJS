class Person {
    constructor(name, age, isSingle){
        this.name = name;
        this.age = age;
        this.isSingle = isSingle;
    }

    sayHi(){
        console.log(`Halo nama saya ${this.name}`);
    }

    checkIsSingle() {
        console.log(`${this.name} sudah menikah? ${this.isSingle}`);
    }

    getAge() {
        return this.age;
    }

    setIsSingle(value) {
        this.isSingle = value;
    }
}

const Andi = new Person('Andi', 20, true);
Andi.sayHi();
Andi.checkIsSingle();

// Menggunakan nilai kembalian dari method getAge()
console.log(`Umur saya adalah ${Andi.getAge()}`);

// Menggunakan method setIsSingle untuk mengubah nilai isSingle
Andi.setIsSingle(false);
Andi.checkIsSingle();
