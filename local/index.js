class Hewan {
    constructor(name, type, sound) {
        this.name = name;
        this.type = type;
        this.sound = sound;
    }

    getType() {
        return this.type
    }

    barking() {
        console.log(`${this.sound}`)
    }

    setBarking(value) {
        this.sound = value
    }
}

const kucing = new Hewan('moli', 'anggora', 'meow')
console.log(kucing)
kucing.setBarking('guk guk')
kucing.barking()
console.log(`Jenis ${kucing.name} adalah ${kucing.getType()}`)